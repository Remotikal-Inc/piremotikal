"use client";

import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";
import { wordsToAnimateSkynet } from "@/constants";
import { FlipWords } from "@/components/ui/flip-words";
import SkynetBlogPage from '@/components/sections/SkynetBlogSection';
import SkynetHighlightsPage from '@/components/sections/SkynetHighlightsSection';
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import AnnouncementCard from "@/components/AnnouncementCard";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function page() {
     return (
          <section className="flex flex-col overflow-hidden">
               <div className="my-32 mt-20 md:my-48 text-center flex flex-col gap-4 text-neutral-400 h-[40vh] justify-center">
                    <div className="mb-4 flex justify-center">
                         {/* TODO */}
                         <AnnouncementCard text="⇓ Inside: Skynet Neural Processor ⇓" link="#editThisLater" />
                    </div>
                    <VelocityScroll
                         text="Introducing SKYNET ✦"
                         default_velocity={5}
                         className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
                    />
                    <div className="mt-4 gap-3 inline-flex justify-center">
                         <Link href="#blog">
                              <Button size={"lg"} className="dark:hover:bg-neutral-300">
                                   Read More
                              </Button>
                         </Link>
                         <Link href="#highlights">
                              <Button variant={"outline"} size={"lg"} className="dark:bg-neutral-900 dark:border-neutral-900 dark:hover:bg-neutral-800">
                                   Get The Highlights
                              </Button>
                         </Link>
                    </div>
               </div>

               <div id="highlights"><SkynetHighlightsPage /></div>

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
                         src="/skynetMobile.jfif"
                         alt="hero"
                         height={720}
                         width={1400}
                         className="mx-auto rounded-2xl object-cover h-full object-left-top inline-block lg:hidden"
                         draggable={false}
                    />
                    <Image
                         src={`/skynetDesktop.jfif`}
                         alt="hero"
                         height={720}
                         width={1400}
                         className="mx-auto rounded-2xl object-cover h-full object-left-top hidden lg:inline-block"
                         draggable={false}
                    />
               </ContainerScroll>

               <div id="blog"><SkynetBlogPage /></div>
          </section>
     );
}