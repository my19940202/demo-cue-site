import { Outlet, createFileRoute, notFound } from '@tanstack/react-router'
import { supportedLocales } from '../lib/i18n'

export const Route = createFileRoute('/$locale')({
  beforeLoad: ({ params }) => {
    if (!supportedLocales.some((locale) => locale === params.locale)) {
      throw notFound()
    }
  },
  component: LocaleLayout,
})

function LocaleLayout() {
  return <Outlet />
}
