import UserNav from './usernav'
import { Button } from '../ui/button'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '#front/components/ui/sheet.tsx'

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '#front/components/ui/navigation_menu.tsx'

export default function MobileNav() {
  return (
    <>
      <Sheet>
        <SheetTrigger>
          <Button>Menu</Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>
              <div>
                <UserNav />
              </div>
            </SheetTitle>
            <SheetClose />
          </SheetHeader>
          <NavigationMenu>
            <NavigationMenuList className="flex-col items-start gap-8">
              <NavigationMenuItem>
                <NavigationMenuLink href="/">Home</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="/">Page de connexion</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="/">Page d'inscription</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="/">Autre page</NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <SheetFooter>
            <ul>
              <li>Mentions légales</li>
              <li>Politique de confidentialité</li>
            </ul>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  )
}
