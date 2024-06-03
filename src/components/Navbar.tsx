'use client'

import { Sheet, SheetTrigger, SheetContent } from "../../components/ui/sheet"
import { Button } from "../../components/ui/button"
import Link from "next/link"
import { NavigationMenu, NavigationMenuList, NavigationMenuLink } from "../../components/ui/navigation-menu"
import React from "react";
import DarkThemeToggler from "./DarkThemeToggler"
import { navbarItems } from "@/constants"

type SVGProps = React.SVGProps<SVGSVGElement>;

export default function Navbar() {
     return (
          <header className="flex md:h-[10vh] py-10 w-full shrink-0 items-center">
               <Sheet>
                    <SheetTrigger asChild>
                         <Button variant="outline" size="icon" className="lg:hidden bg-transparent">
                              <MenuIcon className="h-6 w-6" />
                              <span className="sr-only">Toggle navigation menu</span>
                         </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="dark:bg-neutral-900">
                         <Link href="#" prefetch={false}>
                              <MountainIcon className="h-10 w-10" />
                              <span className="sr-only">Acme Inc</span>
                         </Link>
                         <div className="grid gap-2 py-6">
                              {navbarItems.map((item) => (
                                   <Link key={item.id} href={item.slug} className="flex w-full items-center py-2 text-lg font-semibold" prefetch={false}>
                                        {item.name}
                                   </Link>
                              ))}

                              <DarkThemeToggler />
                         </div>
                    </SheetContent>
               </Sheet>
               <Link href="#" className="mr-6 hidden lg:flex" prefetch={false}>
                    <MountainIcon className="h-6 w-6" />
                    <span className="sr-only">Acme Inc</span>
               </Link>
               <NavigationMenu className="ml-auto hidden lg:flex gap-6">
                    <NavigationMenuList>
                         <NavigationMenuLink asChild>
                              <div className="flex gap-8">
                                   {navbarItems.map((item) => (
                                        <Link
                                             key={item.id}
                                             href={item.slug}
                                             className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-lg font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-secondary-foreground h-10 py-2"
                                             prefetch={false}
                                        >
                                             {item.name}
                                        </Link>
                                   ))}

                                   <DarkThemeToggler />
                              </div>
                         </NavigationMenuLink>
                    </NavigationMenuList>
               </NavigationMenu>
          </header>
     )
}

const MenuIcon: React.FC<SVGProps> = (props) => {
     return (
          <svg
               {...props}
               xmlns="http://www.w3.org/2000/svg"
               width="24"
               height="24"
               viewBox="0 0 24 24"
               fill="none"
               stroke="currentColor"
               strokeWidth="2"
               strokeLinecap="round"
               strokeLinejoin="round"
          >
               <line x1="4" x2="20" y1="12" y2="12" />
               <line x1="4" x2="20" y1="6" y2="6" />
               <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
     )
}


const MountainIcon: React.FC<SVGProps> = (props) => {
     return (
          <svg
               {...props}
               xmlns="http://www.w3.org/2000/svg"
               width="24"
               height="24"
               viewBox="0 0 24 24"
               fill="none"
               stroke="currentColor"
               strokeWidth="2"
               strokeLinecap="round"
               strokeLinejoin="round"
          >
               <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
          </svg>
     )
}