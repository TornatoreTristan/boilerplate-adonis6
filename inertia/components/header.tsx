import Nav from './nav/nav'
import UserNav from './nav/usernav'

export default function Header() {
  return (
    <>
      <div className="flex justify-between items-center py-4 px-16">
        <div>
          <h1>Logo</h1>
        </div>
        <div className="flex gap-8 items-center">
          <Nav />
          <UserNav />
        </div>
      </div>
    </>
  )
}
