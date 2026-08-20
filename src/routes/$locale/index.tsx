import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { buildSeoHead } from '../../lib/seo'
import { copy, localizedPath, parseLocale, siteConfig, type SupportedLocale } from '../../lib/i18n'

const mobileMediaQuery = '(max-width: 620px)'

function isMobileViewport() {
  return typeof window !== 'undefined' && window.matchMedia(mobileMediaQuery).matches
}

const seo: Record<SupportedLocale, { title: string; description: string }> = {
  en: {
    title: 'DemoCue — AI Cue Bar for Screen Recording',
    description:
      'Create AI outlines and use a floating cue bar while recording product demos, tutorials, screen videos, screen-share livestreams, and presentations.',
  },
  zh: {
    title: 'DemoCue — 录屏演示的 AI 悬浮提示条',
    description:
      '为产品演示、录屏教程、电脑屏幕直播和技术分享生成 AI 提纲，并在桌面悬浮提示条中展示讲解线索。',
  },
}

export const Route = createFileRoute('/$locale/')({
  head: ({ params }) => {
    const locale = parseLocale(params.locale)
    return buildSeoHead({ locale, path: `/${locale}`, ...seo[locale] })
  },
  component: HomePage,
})

function HomePage() {
  const locale = parseLocale(Route.useParams().locale)
  const t = copy[locale]
  const [activePosterIndex, setActivePosterIndex] = useState(0)
  const [fullscreenOpen, setFullscreenOpen] = useState(false)
  const activePoster = t.posters[activePosterIndex] ?? t.posters[0]

  useEffect(() => {
    if (!fullscreenOpen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setFullscreenOpen(false)
      }
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [fullscreenOpen])

  const openFullscreen = () => {
    if (isMobileViewport()) {
      setFullscreenOpen(true)
    }
  }

  const closeFullscreen = () => {
    setFullscreenOpen(false)
  }

  const showPreviousPoster = () => {
    setActivePosterIndex((current) => (current - 1 + t.posters.length) % t.posters.length)
  }

  const showNextPoster = () => {
    setActivePosterIndex((current) => (current + 1) % t.posters.length)
  }

  return (
    <main>
      <section id="intro" className="page-shell hero-grid py-5 sm:py-12">
        <div className="hero-copy">
          <span className="pill">{t.eyebrow}</span>
          <h1>{t.heroTitle}</h1>
          <p>{t.heroDescription}</p>
          <div className="cta-row">
            <a
              className="button button-primary"
              href={siteConfig.downloadUrl}
              target="_blank"
              rel="noreferrer"
            >
              {t.primaryCta}
            </a>
            <a className="button" href={localizedPath(locale, '#features')}>
              {t.secondaryCta}
            </a>
          </div>
          <p className="microcopy">{t.socialProof}</p>
        </div>
        <div className="hero-art" aria-label="DemoCue product screenshots">
          <figure className="hero-carousel">
            <button
              type="button"
              className="hero-carousel-trigger"
              onClick={openFullscreen}
              aria-label={t.viewScreenshotFullscreen}
            >
              <img src={activePoster.src} alt={activePoster.alt} />
            </button>
            {/* <figcaption>{activePoster.label}</figcaption> */}
          </figure>
          <div className="carousel-controls" aria-label="Screenshot controls">
            <button type="button" className="carousel-button" onClick={showPreviousPoster}>
              <span className="sr-only">{t.previousScreenshot}</span>
              ←
            </button>
            <button type="button" className="carousel-button" onClick={showNextPoster}>
              <span className="sr-only">{t.nextScreenshot}</span>
              →
            </button>
          </div>
          <span className="spark spark-one">✦</span>
          <span className="spark spark-two">✶</span>
        </div>
      </section>

      {fullscreenOpen ? (
        <div
          className="poster-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={activePoster.alt}
        >
          <button
            type="button"
            className="poster-lightbox-backdrop"
            onClick={closeFullscreen}
            aria-label={t.closeFullscreen}
          />
          <button
            type="button"
            className="poster-lightbox-close"
            onClick={closeFullscreen}
            aria-label={t.closeFullscreen}
          >
            ×
          </button>
          <img
            className="poster-lightbox-image"
            src={activePoster.src}
            alt={activePoster.alt}
          />
        </div>
      ) : null}

      <section className="page-shell intro-card">
        <div>
          <span>Hi, I'm</span>
          <strong>DemoCue</strong>
        </div>
        <p>{t.introBody}</p>
      </section>

      <section id="features" className="page-shell section-block">
        <h2 className="mb-3">{t.featuresTitle}</h2>
        <div className="card-grid">
          {t.features.map(([title, body], index) => (
            <article className="feature-card" key={title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="how" className="page-shell section-block">
        <h2>{t.howTitle}</h2>
        <div className="card-grid steps">
          {t.steps.map(([title, body], index) => (
            <article key={title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* <section id="install" className="page-shell install-card">
        <span className="pill">{t.installLabel}</span>
        <h2>{t.installTitle}</h2>
        <p>{t.installBody}</p>
        <a
          className="button button-primary"
          href={siteConfig.downloadUrl}
          target="_blank"
          rel="noreferrer"
        >
          {t.primaryCta}
        </a>
      </section> */}

      <section id="faq" className="page-shell section-block faq-section">
        <h2>{t.faqTitle}</h2>
        <div className="faq-list">
          {t.faqs.map(([question, answer]) => (
            <details key={question}>
              <summary>{question}</summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  )
}
