import { createFileRoute } from '@tanstack/react-router'

type HeartbeatPayload = {
  installId?: unknown
  appVersion?: unknown
  platform?: unknown
  locale?: unknown
}

type AnalyticsEnv = Env & {
  ANALYTICS_SALT?: string
}

type HandlerContext = {
  request?: Request
}

const jsonHeaders = {
  'content-type': 'application/json; charset=utf-8',
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'POST, OPTIONS',
  'access-control-allow-headers': 'content-type',
}

export const Route = createFileRoute('/api/app/heartbeat')({
  server: {
    handlers: {
      OPTIONS: () => new Response(null, { status: 204, headers: jsonHeaders }),
      POST: async (ctx: HandlerContext) => {
        try {
          const request = ctx.request
          if (!request) return json({ ok: false, error: 'missing_request' }, 500)

          const payload = (await request.json().catch(() => null)) as HeartbeatPayload | null
          const parsed = parsePayload(payload)
          if (!parsed.ok) return json({ ok: false, error: parsed.error }, 400)

          const { env } = await import('cloudflare:workers')
          const analyticsEnv = env as AnalyticsEnv
          const db = analyticsEnv.DB
          const salt =
            typeof analyticsEnv.ANALYTICS_SALT === 'string' ? analyticsEnv.ANALYTICS_SALT : ''

          if (!db) return json({ ok: false, error: 'missing_d1_binding' }, 500)
          if (!salt) return json({ ok: false, error: 'missing_analytics_salt' }, 500)

          const now = new Date()
          const seenAt = now.toISOString()
          const date = seenAt.slice(0, 10)
          const installIdHash = await sha256Hex(`${salt}:${parsed.installId}`)

          await db
            .prepare(
              `INSERT INTO app_installs (
                install_id_hash,
                first_seen_at,
                last_seen_at,
                app_version,
                platform,
                locale
              ) VALUES (?, ?, ?, ?, ?, ?)
              ON CONFLICT(install_id_hash) DO UPDATE SET
                last_seen_at = excluded.last_seen_at,
                app_version = excluded.app_version,
                platform = excluded.platform,
                locale = excluded.locale`
            )
            .bind(
              installIdHash,
              seenAt,
              seenAt,
              parsed.appVersion,
              parsed.platform,
              parsed.locale
            )
            .run()

          await db
            .prepare(
              `INSERT OR IGNORE INTO app_daily_active (
                date,
                install_id_hash,
                app_version,
                platform,
                locale,
                seen_at
              ) VALUES (?, ?, ?, ?, ?, ?)`
            )
            .bind(
              date,
              installIdHash,
              parsed.appVersion,
              parsed.platform,
              parsed.locale,
              seenAt
            )
            .run()

          return json({ ok: true })
        } catch (error) {
          console.error('[app_heartbeat] failed:', error)
          return json({ ok: false, error: 'internal_error' }, 500)
        }
      },
    },
  },
})

function json(body: unknown, status = 200) {
  return Response.json(body, { status, headers: jsonHeaders })
}

function parsePayload(payload: HeartbeatPayload | null):
  | {
      ok: true
      installId: string
      appVersion: string
      platform: string
      locale: string | null
    }
  | { ok: false; error: string } {
  if (!payload || typeof payload !== 'object') {
    return { ok: false, error: 'invalid_payload' }
  }

  const installId = normalizeString(payload.installId, 128)
  const appVersion = normalizeString(payload.appVersion, 32)
  const platform = normalizeString(payload.platform, 32)
  const locale = normalizeOptionalString(payload.locale, 32)

  if (!installId) return { ok: false, error: 'missing_install_id' }
  if (!appVersion) return { ok: false, error: 'missing_app_version' }
  if (!platform) return { ok: false, error: 'missing_platform' }

  return { ok: true, installId, appVersion, platform, locale }
}

function normalizeString(value: unknown, maxLength: number) {
  if (typeof value !== 'string') return null
  const normalized = value.trim()
  if (!normalized || normalized.length > maxLength) return null
  return normalized
}

function normalizeOptionalString(value: unknown, maxLength: number) {
  if (value === undefined || value === null) return null
  return normalizeString(value, maxLength)
}

async function sha256Hex(value: string) {
  const bytes = new TextEncoder().encode(value)
  const digest = await crypto.subtle.digest('SHA-256', bytes)
  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, '0'))
    .join('')
}
