import { copy, siteConfig, type SupportedLocale } from '../lib/i18n'

export default function Footer({ locale }: { locale: SupportedLocale }) {
  const year = new Date().getFullYear()
  const t = copy[locale]

  return (
    <footer className="site-footer">
      <div className="page-shell footer-shell">
        <p>© {year} DemoCue · {t.footer}</p>
        <div className="footer-links">
          <a href={siteConfig.xiaohongshuUrl} target="_blank" rel="noreferrer">
            {t.footerXiaohongshu}
          </a>
          <a href={siteConfig.twitterUrl} target="_blank" rel="noreferrer">
            {t.footerTwitter}
          </a>
        </div>
      </div>
    </footer>
  )
}
