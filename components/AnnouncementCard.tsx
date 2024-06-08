import Link from 'next/link'
import React from 'react'

export default function AnnouncementCard({ text, link }: { text: String, link: string }) {
     return (
          <div className='flex text-black dark:text-white'>
               <Link
                    className="inline-flex items-center gap-x-2 border text-sm p-1 ps-3 rounded-full transition"
                    href={link}
               >
                    {text}
                    <span className="py-1.5 px-2.5 inline-flex justify-center items-center gap-x-2 rounded-full bg-muted-foreground/15 font-semibold text-sm">
                         <svg
                              className="flex-shrink-0 w-4 h-4"
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                         >
                              <path d="m9 18 6-6-6-6" />
                         </svg>
                    </span>
               </Link>
          </div>
     )
}
