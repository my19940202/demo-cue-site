import { Link } from '@tanstack/react-router'
import { copy, getDownloadUrl, localizedPath, siteConfig, type SupportedLocale } from '../lib/i18n'

export default function Header({ locale }: { locale: SupportedLocale }) {
  const t = copy[locale]
  const downloadUrl = getDownloadUrl()

  return (
    <header className="site-header">
      <nav className="page-shell header-shell" aria-label="Primary navigation">
        <Link to="/$locale" params={{ locale }} className="brand">
          <img className="brand-mark h-[45px] w-[45px]" src="/icon.png" alt="" aria-hidden="true" />
          <span>DemoCue</span>
        </Link>

        <div className="nav-links">
          <a href={localizedPath(locale, '#intro')}>{t.navIntro}</a>
          <a href={localizedPath(locale, '#features')}>{t.navFeatures}</a>
          <a href={localizedPath(locale, '#how')}>{t.navHow}</a>
          <a href={localizedPath(locale, '#faq')}>{t.navFaq}</a>
        </div>

        <div className="header-actions">
          <a className="language-link" href={t.langSwitchPath}>
            {t.langSwitch}
          </a>
          <a
            className="button button-small"
            href={siteConfig.downloadUrl}
            target="_blank"
            rel="noreferrer"
          >
            {t.githubDownload}
          </a>
          <a
            className="button button-small button-primary"
            href={downloadUrl}
            target="_blank"
            rel="noreferrer"
          >
            {t.contact}
          </a>
        </div>
      </nav>
    </header>
  )
}
