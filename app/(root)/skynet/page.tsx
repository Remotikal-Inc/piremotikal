"use client";

import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";
import { wordsToAnimateSkynet } from "@/constants";
import { FlipWords } from "@/components/ui/flip-words";
import SkynetPage from '@/components/pages/SkynetPage';
import SkynetHighlightsPage from '@/components/pages/SkynetHighlightsPage';
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";

export default function page() {
     return (
          <section className="flex flex-col overflow-hidden">
               <div className="mt-20 md:mt-48 text-center flex flex-col gap-4 text-neutral-400 h-[40vh] justify-center">
                    <p>not just another average text-to-text model</p>
                    <VelocityScroll
                         text="Introducing Skynet"
                         default_velocity={5}
                         className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
                    />
                    <p className="mt-2">nope, this is not based on openai&apos;s api key</p>
               </div>

               <ContainerScroll
                    titleComponent={
                         <div className='text-2xl md:text-3xl lg:text-4xl mx-auto font-normal text-slate-600 dark:text-slate-400 pb-2'>
                              <span className="text-neutral-950 dark:text-neutral-100 font-bold text-4xl md:text-5xl lg:text-6xl">SKYNET</span>
                              {" "}can
                              <FlipWords words={wordsToAnimateSkynet} />
                         </div>
                    }
               >
                    <Image
                         src="/skynetMobile.jfif" // TODO
                         alt="hero"
                         height={720}
                         width={1400}
                         className="mx-auto rounded-2xl object-cover h-full object-left-top inline-block md:hidden"
                         draggable={false}
                    />
                    <Image
                         src={`/skynetDesktop.jfif`} // TODO
                         alt="hero"
                         height={720}
                         width={1400}
                         className="mx-auto rounded-2xl object-cover h-full object-left-top hidden md:inline-block"
                         draggable={false}
                    />
               </ContainerScroll>

               <SkynetPage />

               <SkynetHighlightsPage />
          </section>
     );
}