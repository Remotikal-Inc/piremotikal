import React from 'react'

export default function MissionPage() {
     return (
          <section className="flex flex-col gap-12 md:my-10">
               <div className="mx-auto">
                    {/* Grid */}
                    <div className="grid gap-12">
                         <div>
                              <h2 className="text-3xl font-bold lg:text-4xl">Our Mission</h2>
                              <p className="mt-3 text-xl lg:text-2xl text-neutral-600 dark:text-neutral-300">
                                   Our mission is to assist developers and users through our open-source and freeware complex software solutions which are universally accessible and useful.
                              </p>
                         </div>
                    </div>
               </div>
          </section>
     )
}
