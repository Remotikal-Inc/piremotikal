import { footerLinks } from "../../constants";
import Link from "next/link"

interface IconProps extends React.SVGProps<SVGSVGElement> {}

export default function Footer() {
     return (
          <footer className="w-full pb-14 bg-transparent">
               <div className="mb-12 flex flex-col gap-4">
                    <blockquote className="text-xl sm:text-2xl md:text-3xl max-w-4xl italic font-semibold text-gray-900 dark:text-white">
                         <svg className="w-8 h-8 text-gray-400 dark:text-gray-600 mb-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                              <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                         </svg>
                         <h1>Unlocking the future with simplicity and innovation, shaping tomorrow&apos;s tech landscape.</h1>
                    </blockquote>
                    <p className="text-lg md:text-xl"><span className="text-lg sm:text-xl md:text-2xl font-bold">Aayush Sharma</span>{" "}(CEO & Co-Founder.)</p>
               </div>
               <div className="mx-auto flex flex-col items-center justify-between gap-8 md:flex-row md:gap-0">
                    <div className="gap-2">
                         <Link href="/" className="text-lg font-semibold underline underline-offset-2">Remotikal, Inc.</Link>
                         <p>Remotikal, Inc. 2019 - 2024. All Rights Rights Reserved. Copyright Remotikal, Inc.</p>
                    </div>
                    <div className="flex flex-col items-center gap-4 md:flex-row md:gap-8">
                         <nav className="inline-flex flex-row items-center gap-6 flex-wrap justify-center">
                              {footerLinks.map((item) => (
                                   <Link key={item.id} href={item.url} className="text-sm hover:underline" prefetch={false}>
                                        {item.label}
                                   </Link>
                              ))}
                         </nav>
                         <div className="flex gap-4 mt-4 md:mt-0">
                              <Link href="#" aria-label="Twitter" prefetch={false}>
                                   <TwitterIcon className="h-5 w-5" />
                              </Link>
                              <Link href="#" aria-label="GitHub" prefetch={false}>
                                   <GithubIcon className="h-5 w-5" />
                              </Link>
                              <Link href="#" aria-label="LinkedIn" prefetch={false}>
                                   <LinkedinIcon className="h-5 w-5" />
                              </Link>
                              <Link href="#" aria-label="Instagram" prefetch={false}>
                                   <InstagramIcon className="h-5 w-5" />
                              </Link>
                         </div>
                    </div>
               </div>
          </footer>
     );
}

const GithubIcon: React.FC<IconProps> = (props) => {
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
               <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
               <path d="M9 18c-4.51 2-5-2-7-2" />
          </svg>
     )
}


const InstagramIcon: React.FC<IconProps> = (props) => {
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
               <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
               <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
               <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>
     )
}


const LinkedinIcon: React.FC<IconProps> = (props) => {
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
               <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
               <rect width="4" height="12" x="2" y="9" />
               <circle cx="4" cy="4" r="2" />
          </svg>
     )
}

const TwitterIcon: React.FC<IconProps> = (props) => {
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
               <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
          </svg>
     )
}