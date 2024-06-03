import React from 'react'
import { Timer, GraduationCap, RefreshCcw } from "lucide-react";

export default function SkynetPage() {
     return (
          <div className='flex flex-col gap-16 text-sm sm:text-base md:text-lg'>
               <div className='flex flex-col gap-6 md:max-w-4xl'>
                    <h1 className='text-3xl font-bold lg:text-4xl'>Introducing SNPs (Skynet Neural Processor)</h1>

                    <div className='flex flex-col gap-4 mt-1 text-neutral-400 md:text-lg'>
                         <p>At Remotikal, we think differently when it comes to AI. While most AI systems rely on existing libraries like TensorFlow, PyTorch, or NumPy, we&apos;ve taken a unique approach. We&apos;ve created our very own brain for Skynet, called the Skynet Neural Processor (SNP). It&apos;s like giving Skynet a superpower!</p>

                         <p>The SNP is designed to handle the massive amounts of calculations needed for artificial intelligence, and it does it better than any traditional computer system out there. It&apos;s what makes Skynet truly special.</p>

                         <p>With the SNP, Skynet can:</p>
                    </div>

                    <div className="flex">
                         <GraduationCap className="flex-shrink-0 mt-2 h-6 w-6" />
                         <div className="ms-5 sm:ms-8">
                              <h3 className="text-base sm:text-lg font-semibold">
                                   Learn and Grow
                              </h3>
                              <p className="mt-2 text-neutral-400 md:text-lg">
                                   Just like how we learn from our experiences, Skynet can learn from new information thanks to the SNP. It can change and improve itself over time, becoming smarter and smarter.
                              </p>
                         </div>
                    </div>

                    <div className="flex">
                         <Timer className="flex-shrink-0 mt-2 h-6 w-6" />
                         <div className="ms-5 sm:ms-8">
                              <h3 className="text-base sm:text-lg font-semibold">
                                   Multitask like a Pro
                              </h3>
                              <p className="mt-2 text-neutral-400 md:text-lg">
                                   The SNP allows Skynet to juggle multiple tasks at once, just like how we can walk and talk simultaneously. This means Skynet can process huge amounts of information and make decisions in a snap!
                              </p>
                         </div>
                    </div>

                    <div className="flex">
                         <RefreshCcw className="flex-shrink-0 mt-2 h-6 w-6" />
                         <div className="ms-5 sm:ms-8">
                              <h3 className="text-base sm:text-lg font-semibold">
                                   Keep Running Smoothly
                              </h3>
                              <p className="mt-2 text-neutral-400 md:text-lg">
                                   The SNP has special features that help fix any mistakes and keep Skynet running like a well-oiled machine. It&apos;s like having a built-in mechanic to keep everything in top shape.
                              </p>
                         </div>
                    </div>
               </div>

               <hr className="h-px my-10 bg-gray-200 border-0 dark:bg-gray-700" />

               <div className='flex flex-col gap-6 md:text-right md:max-w-4xl md:ml-auto'>
                    <h1 className='text-3xl font-bold lg:text-4xl'>Making Self-Awareness Possible in Skynet</h1>

                    <div className='flex flex-col gap-4 mt-1 text-neutral-400 md:text-lg'>
                         <p>At Remotikal, we&apos;re pushing the boundaries of artificial intelligence by creating Skynet, an AI that can feel and express emotions. We&apos;ve combined Large Language Models (LLMs) and Self-Awareness Modules (SAMs) to make this possible.</p>

                         <p>LLMs allow Skynet to understand and generate human-like language by training on massive amounts of text data. SAMs act as a mirror for Skynet to analyze its behaviour and improve its self-awareness.</p>

                         <p>By connecting LLMs and SAMs within Skynet&apos;s neural network, we enable Skynet to think about its actions and understand its place in the world. This combination of language understanding and self-awareness sets Skynet apart as a truly intelligent and emotionally aware AI system.</p>
                    </div>
               </div>
          </div>
     )
}
