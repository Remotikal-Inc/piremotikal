import React from "react";
import { FlipWords } from "../../components/ui/flip-words";
import { wordsToAnimate } from "@/constants";

export function HeroFlipWords() {
     return (
          <div className="text-3xl md:text-4xl lg:text-5xl mx-auto font-normal text-slate-600 dark:text-slate-400">
               Create
               <FlipWords words={wordsToAnimate} /> <br />
               software with <span className="text-4xl md:text-5xl lg:text-6xl text-neutral-950 dark:text-neutral-100 font-bold">Remotikal, Inc.</span>
          </div>
     );
}