import { copy, type SupportedLocale } from '../lib/i18n'

export default function Footer({ locale }: { locale: SupportedLocale }) {
  const year = new Date().getFullYear()
  const t = copy[locale]

  return (
    <footer className="site-footer">
      <div className="page-shell footer-shell">
        <p>© {year} DemoCue · {t.footer}</p>
        <p>Built with TanStack Start</p>
      </div>
    </footer>
  )
}
