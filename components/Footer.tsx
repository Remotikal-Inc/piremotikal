import { footerLinks } from "@/constants";
import { GithubIconSVG, InstagramIconSVG, LinkedinIconSVG, TwitterIconSVG } from "@/constants/JSXContants";
import Link from "next/link"

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
                                   <TwitterIconSVG className="h-5 w-5" />
                              </Link>
                              <Link href="#" aria-label="GitHub" prefetch={false}>
                                   <GithubIconSVG className="h-5 w-5" />
                              </Link>
                              <Link href="#" aria-label="LinkedIn" prefetch={false}>
                                   <LinkedinIconSVG className="h-5 w-5" />
                              </Link>
                              <Link href="#" aria-label="Instagram" prefetch={false}>
                                   <InstagramIconSVG className="h-5 w-5" />
                              </Link>
                         </div>
                    </div>
               </div>
          </footer>
     );
}