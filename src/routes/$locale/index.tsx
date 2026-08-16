import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { buildSeoHead } from '../../lib/seo'
import { copy, localizedPath, parseLocale, siteConfig, type SupportedLocale } from '../../lib/i18n'

const seo: Record<SupportedLocale, { title: string; description: string }> = {
  en: {
    title: 'DemoCue — AI Cue Bar for Screen Recording',
    description:
      'Create AI outlines and use a floating cue bar while recording product demos, tutorials, screen videos, and presentations.',
  },
  zh: {
    title: 'DemoCue — 录屏演示的 AI 悬浮提示条',
    description:
      '为产品演示、录屏教程和技术分享生成 AI 提纲，并在桌面悬浮提示条中展示讲解线索。',
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
  const activePoster = t.posters[activePosterIndex] ?? t.posters[0]

  const showPreviousPoster = () => {
    setActivePosterIndex((current) => (current - 1 + t.posters.length) % t.posters.length)
  }

  const showNextPoster = () => {
    setActivePosterIndex((current) => (current + 1) % t.posters.length)
  }

  return (
    <main>
      <section id="intro" className="page-shell hero-grid py-8 sm:py-12">
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
            <img src={activePoster.src} alt={activePoster.alt} />
            <figcaption>{activePoster.label}</figcaption>
          </figure>
          <div className="carousel-controls" aria-label="Screenshot controls">
            <button type="button" className="carousel-button" onClick={showPreviousPoster}>
              <span className="sr-only">{t.previousScreenshot}</span>
              ←
            </button>
            <div className="carousel-dots">
              {t.posters.map((poster, index) => (
                <button
                  type="button"
                  key={poster.src}
                  className={`carousel-dot${activePosterIndex === index ? ' is-active' : ''}`}
                  onClick={() => setActivePosterIndex(index)}
                  aria-label={`${t.showScreenshot} ${poster.label}`}
                  aria-pressed={activePosterIndex === index}
                />
              ))}
            </div>
            <button type="button" className="carousel-button" onClick={showNextPoster}>
              <span className="sr-only">{t.nextScreenshot}</span>
              →
            </button>
          </div>
          <span className="spark spark-one">✦</span>
          <span className="spark spark-two">✶</span>
        </div>
      </section>

      <section className="page-shell intro-card">
        <div>
          <span>Hi, I'm</span>
          <strong>DemoCue</strong>
        </div>
        <p>{t.introBody}</p>
      </section>

      <section id="features" className="page-shell section-block">
        <p className="section-kicker">{t.featuresKicker}</p>
        <h2>{t.featuresTitle}</h2>
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

      <section id="how" className="page-shell section-block split-section">
        <div>
          <p className="section-kicker">{t.howKicker}</p>
          <h2>{t.howTitle}</h2>
        </div>
        <div className="steps">
          {t.steps.map(([title, body], index) => (
            <article key={title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="install" className="page-shell install-card">
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
      </section>

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
