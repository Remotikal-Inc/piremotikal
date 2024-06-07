import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
     IconClipboardCopy,
     IconFileBroken,
     IconSignature,
     IconTableColumn,
} from "@tabler/icons-react";

export default function ProductsPage() {
     return (
          <section className="md:mt-10">
               <h2 className="text-3xl font-bold lg:text-4xl mb-10">Our Products</h2>
               <BentoGrid className="md:auto-rows-[20rem]">
                    {products.map((item, i) => (
                         <BentoGridItem
                              key={i}
                              title={item.title}
                              description={item.description}
                              header={item.header}
                              className={item.className}
                              icon={item.icon}
                         />
                    ))}
               </BentoGrid>
          </section>
     );
}

const Skeleton = () => (
     <div className="flex flex-1 w-full h-full min-h-40 rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);

export const products = [
     {
          title: "Sketchware",
          description: "Sketchware lets you build mobile apps using lego-like blocks. Block language lets you go beyond prebuilt widgets, allowing your application to be flexible and scalable.",
          header: <Skeleton />,
          className: "md:col-span-3",
          icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
          links: {
               homepage: "https://sketchware.remotikal.com",
               github: "https://github.com/Sketchware-Pro/Sketchware-Pro",
               website: "https://sketchware.pro"
          }
     },
     {
          title: "BlissOS",
          description: "Android for your PC. An Android-based open source OS that incorporates many optimizations, features, and that supports many more devices.",
          header: <Skeleton />,
          className: "md:col-span-2",
          icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
          links: {
               github: "https://github.com/BlissRoms-x86",
               website: "https://blissos.org/"
          }
     },
     {
          title: "Renux",
          description: "A kernel that can run Android, Linux, and Windows software independently together. Coming Soon.",
          header: <Skeleton />,
          className: "md:col-span-2",
          icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
          links: {
               github: "TODO",
               website: "TODO"
          }
     },
     {
          title: "Refresh Browser",
          description:
               "A browser that uses Tor and Pi TurboNet which pipes you through into decentralized network. An independent browser built by Remotikal. Coming Soon.",
          header: <Skeleton />,
          className: "md:col-span-3",
          icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
          links: {
               github: "TODO",
               website: "TODO"
          }
     },
];