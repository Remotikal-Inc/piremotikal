"use client";

import Image from "next/image";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { SkynetBlogPageContent } from "@/constants/JSXContants";

export default function SkynetBlogPage() {
    return (
        <TracingBeam className="md:px-8">
            <div className="mx-auto antialiased pt-4 relative">
                {SkynetBlogPageContent.map((item, index) => (
                    <div key={`content-${index}`} className="mb-10 w-full">
                        <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-2">
                            {item.badge}
                        </h2>

                        <p className="mb-4 text-2xl font-bold lg:text-3xl">
                            {item.title}
                        </p>

                        <div className="flex flex-col text-sm md:text-base lg:text-lg dark:text-neutral-400 prose prose-sm dark:prose-invert max-w-full">
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
                    </div>
                ))}
            </div>
        </TracingBeam>
    );
}