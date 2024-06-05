import React from 'react'
import Hero from '../components/pages/Hero'
import VisionPage from '../components/pages/VisionPage'
import ContactPage from '../components/pages/ContactPage'
import MissionPage from '../components/pages/MissionPage'
import TestimonialsPage from '../components/pages/TestimonialsPage'

export default function Home() {
     return (
          <main>
               <div className='md:h-[90vh] flex items-center' id="home">
                    <Hero />
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
