import MobileNav from './nav/mobilenav'
import Nav from './nav/nav'
import UserNav from './nav/usernav'

export default function Header() {
  return (
    <>
      <div className="flex justify-between items-center py-4 px-16">
        <div>
          <h1>Logo</h1>
        </div>
        <div className="hidden gap-12 items-center md:flex">
          <Nav />
          <UserNav />
        </div>
        <div className="md:hidden">
          <MobileNav />
        </div>
      </div>
    </>
  )
}
