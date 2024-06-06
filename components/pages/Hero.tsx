import { Button } from "@/components/ui/button";
import AnnouncementCard from "@/components/AnnouncementCard";
import HeroCompanyLogos from "@/components/HeroCompanyLogos";
import { wordsToAnimateHero } from "@/constants";
import { FlipWords } from "@/components/ui/flip-words";
import Link from "next/link";
import { AISVG, CodeSVG, LinuxSVG, NeuralNetworkSVG } from "@/constants/JSXContants";

export default function Hero() {
     return (
          <main className="flex flex-row gap-4">
               <div>
                    <div className="mb-8">
                         {/* TODO */}
                         <AnnouncementCard text="Join the waitlist" link="#editThisLater" />
                    </div>

                    <div className="md:items-center">
                         <div>
                              <div className='text-3xl md:text-4xl lg:text-5xl mx-auto font-normal text-slate-600 dark:text-slate-400'>
                                   Create
                                   <FlipWords words={wordsToAnimateHero} /> <br />
                                   software with <span className="text-4xl md:text-5xl lg:text-6xl text-neutral-950 dark:text-neutral-100 font-bold">Remotikal, Inc.</span>
                              </div>

                              <p className="mt-3 text-base sm:text-lg md:text-xl text-muted-foreground">
                                   We are an innovative company from India. We specialize in creating modern software, working on artificial intelligence (AI), developing neural networks, and engaging in kernel development.
                              </p>
                              {/* Buttons */}
                              <div className="mt-7 grid gap-3 w-full sm:inline-flex">
                                   <Link href="/about">
                                        <Button size={"lg"} className="dark:hover:bg-neutral-300">
                                             About
                                        </Button>
                                   </Link>
                                   <Link href="/products">
                                        <Button variant={"outline"} size={"lg"} className="dark:bg-neutral-900 dark:border-neutral-900 dark:hover:bg-neutral-800">
                                             Explore our Products
                                        </Button>
                                   </Link>
                              </div>
                              {/* End Buttons */}
                              <div className="mt-6 lg:mt-12">
                                   <span className="text-xs font-medium uppercase">Trusted by:</span>
                                   <div className="mt-4 flex gap-x-8 h-10 w-10">
                                        <HeroCompanyLogos />
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>

               {/* circles animation */}
               <div className="relative md:flex h-[500px] w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg hidden">
                    {/* Inner Circles */}
                    <CodeSVG />
                    <NeuralNetworkSVG />

                    {/* Outer Circles (reverse) */}
                    <AISVG />
                    <LinuxSVG />
               </div>
          </main>
     )
}