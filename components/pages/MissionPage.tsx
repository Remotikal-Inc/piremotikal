'use client'

import Globe from '@/components/magicui/globe'
import React from 'react'
import { useTheme } from 'next-themes';
import { GLOBE_CONFIG_DARK, GLOBE_CONFIG_LIGHT } from '@/constants';

export default function MissionPage() {
     const { theme } = useTheme()

     return (
          <section className="flex flex-col gap-12 md:my-10">
               <div className="mx-auto">
                    {/* Grid */}
                    <div className="grid gap-12">
                         <div>
                              <h2 className="text-3xl font-bold lg:text-4xl">Our Mission</h2>
                              <p className="mt-3 text-xl lg:text-2xl text-neutral-600 dark:text-neutral-300">
                                   We&apos;re committed to empower developers and users through our open-source and freeware complex software solutions which are universally accessible and useful.
                              </p>
                         </div>
                         <div className="relative flex h-full w-full items-center justify-center overflow-hidden pb-60 pt-8 md:pb-80">
                              {theme == 'light' ? (
                                   <Globe config={ GLOBE_CONFIG_LIGHT } />
                              ) : (
                                   <Globe config={ GLOBE_CONFIG_DARK } />
                              )}
                              <div className="pointer-events-none absolute inset-0 h-full " /> {/* bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))] */}
                         </div>
                    </div>
               </div>
          </section>
     )
}