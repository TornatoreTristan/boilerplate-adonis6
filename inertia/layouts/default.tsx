import Header from '#front/components/header.tsx'
import Footer from '#front/components/footer.tsx'
import { ThemeProvider } from '#front/components/theme_provider.js'

export default function DefaultLayout({ children }: any) {
  return (
    <>
      <ThemeProvider>
        <Header />
        {children}
        <Footer />
      </ThemeProvider>
    </>
  )
}
