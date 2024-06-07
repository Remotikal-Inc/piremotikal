import React from 'react'
import Hero from '@/components/sections/Hero'
import VisionPage from '@/components/sections/VisionSection'
import ContactPage from '@/components/sections/ContactSection'
import MissionPage from '@/components/sections/MissionSection'
import TestimonialsPage from '@/components/sections/TestimonialsSection'
import StatisticsPage from '@/components/sections/StatisticsSection'

export default function Home() {
     return (
          <main>
               <div className='md:h-[90vh] flex items-center' id="home">
                    <Hero />
               </div>

               <hr className="h-px my-20 md:py-0 bg-gray-200 border-0 dark:bg-gray-700" />

               <div className='flex flex-col sm:flex-row items-center' id="mission">
                    <StatisticsPage />
               </div>

               <hr className="h-px my-20 md:py-0 bg-gray-200 border-0 dark:bg-gray-700" />

               <div className='flex flex-col sm:flex-row items-center' id="mission">
                    <MissionPage />
               </div>

               <hr className="h-px my-20 md:py-0 bg-gray-200 border-0 dark:bg-gray-700" />

               <div className='flex flex-col sm:flex-row items-center' id="mission">
                    <TestimonialsPage />
               </div>

               <hr className="h-px my-20 md:py-0 bg-gray-200 border-0 dark:bg-gray-700" />

               <div className='py-10 flex items-center' id="vision">
                    <VisionPage />
               </div>

               <hr className="h-px my-20 md:py-0 bg-gray-200 border-0 dark:bg-gray-700" />

               <div className='md:h-screen flex items-center justify-center' id="contact">
                    <ContactPage />
               </div>
          </main>
     )
}
