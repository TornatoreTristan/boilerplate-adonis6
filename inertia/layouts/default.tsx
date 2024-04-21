import Header from '#front/components/header.tsx'
import Footer from '#front/components/footer.tsx'

export default function DefaultLayout({ children }: any) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
