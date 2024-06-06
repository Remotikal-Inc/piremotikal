"use client";

import React from "react";
import Image from "next/image";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { skynetPageContent } from "@/constants/JSXContants";

export default function SkynetPage() {
     return (
          <TracingBeam className="md:px-8">
               <div className="max-w-4xl mx-auto antialiased pt-4 relative">
                    {skynetPageContent.map((item, index) => (
                         <div key={`content-${index}`} className="mb-10">
                              <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-2">
                                   {item.badge}
                              </h2>

                              <p className="mb-4 text-2xl font-bold lg:text-3xl">
                                   {item.title}
                              </p>

                              <div className="flex flex-col text-sm md:text-base lg:text-lg dark:text-neutral-400 prose prose-sm dark:prose-invert">
                                   {item?.image && (
                                        <Image
                                             src={item.image}
                                             alt="blog thumbnail"
                                             height="1000"
                                             width="1000"
                                             className="rounded-lg my-5 object-cover border bg-transparent p-2"
                                        />
                                   )}
                                   {item.description}
                              </div>

                              <hr className="mt-10" />
                         </div>
                    ))}
               </div>
          </TracingBeam>
     );
}