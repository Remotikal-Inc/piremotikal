'use client'

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import VideoCarousel from '../VideoCarousel';

export default function Highlights() {
    useGSAP(() => {
        gsap.to('#title', { opacity: 1, y: 0 })

        gsap.to('.link', { opacity: 1, y: 0, duration: 1, stagger: 0.5 })
    }, [])

    return (
        <section id="highlights" className="overflow-hidden h-full flex flex-col my-10 md:my-36">
            <div className="screen-max-width">
                <div className="mb-12 w-full md:flex items-end justify-between">
                    <h1 className="text-3xl md:text-4xl font-bold lg:text-5xl">Get the highlights.</h1>
                </div>

                <VideoCarousel />
            </div>
        </section>
    )
}
