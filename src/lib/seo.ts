import { siteConfig, supportedLocales, type SupportedLocale } from './i18n'

function normalizePath(path: string): string {
  if (!path || path === '/') return '/'
  return `/${path}`.replace(/\/{2,}/g, '/').replace(/\/$/, '')
}

export function absoluteUrl(path: string): string {
  return `${siteConfig.url}${normalizePath(path)}`
}

export const defaultOgImage = absoluteUrl('/og-image.png')

export function buildSeoHead(input: {
  locale: SupportedLocale
  path: string
  title: string
  description: string
}) {
  const canonical = absoluteUrl(input.path)

  return {
    meta: [
      { title: input.title },
      { name: 'description', content: input.description },
      { name: 'robots', content: 'index,follow' },
      { property: 'og:type', content: 'website' },
      { property: 'og:locale', content: input.locale === 'zh' ? 'zh_CN' : 'en_US' },
      { property: 'og:title', content: input.title },
      { property: 'og:description', content: input.description },
      { property: 'og:url', content: canonical },
      { property: 'og:site_name', content: siteConfig.name },
      { property: 'og:image', content: defaultOgImage },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:image:alt', content: 'DemoCue AI cue bar for screen recording' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: input.title },
      { name: 'twitter:description', content: input.description },
      { name: 'twitter:image', content: defaultOgImage },
      { name: 'twitter:image:alt', content: 'DemoCue AI cue bar for screen recording' },
    ],
    links: [
      { rel: 'canonical', href: canonical },
      ...supportedLocales.map((locale) => ({
        rel: 'alternate' as const,
        hrefLang: locale,
        href: absoluteUrl(`/${locale}`),
      })),
      { rel: 'alternate', hrefLang: 'x-default', href: absoluteUrl('/en') },
    ],
  }
}
