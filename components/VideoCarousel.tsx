import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
import { useEffect, useRef, useState } from "react";

import { highlightsSlides } from "@/constants";
import { pauseImg, playImg, replayImg } from "../utils";
import Image from "next/image";

interface VideoState {
     isEnd: boolean;
     startPlay: boolean;
     videoId: number;
     isLastVideo: boolean;
     isPlaying: boolean;
}

interface HighlightsSlide {
     id: number;
     video: string;
     textLists: string[];
     videoDuration: number;
}

const VideoCarousel = () => {
     const videoRef = useRef<(HTMLVideoElement | null)[]>([]);
     const videoSpanRef = useRef<(HTMLSpanElement | null)[]>([]);
     const videoDivRef = useRef<(HTMLSpanElement | null)[]>([]);

     const [video, setVideo] = useState<VideoState>({
          isEnd: false,
          startPlay: false,
          videoId: 0,
          isLastVideo: false,
          isPlaying: false,
     });

     const [loadedData, setLoadedData] = useState<Event[]>([]);
     const { isEnd, isLastVideo, startPlay, videoId, isPlaying } = video;

     useGSAP(() => {
          gsap.to("#slider", {
               transform: `translateX(${-100 * videoId}%)`,
               duration: 2,
               ease: "power2.inOut",
          });

          gsap.to("#video", {
               scrollTrigger: {
                    trigger: "#video",
                    toggleActions: "restart none none none",
               },
               onComplete: () => {
                    setVideo((pre) => ({
                         ...pre,
                         startPlay: true,
                         isPlaying: true,
                    }));
               },
          });
     }, [isEnd, videoId]);

     useEffect(() => {
          let currentProgress = 0;
          let span = videoSpanRef.current;

          if (span[videoId]) {
               let anim = gsap.to(span[videoId], {
                    onUpdate: () => {
                         const progress = Math.ceil(anim.progress() * 100);

                         if (progress !== currentProgress) {
                              currentProgress = progress;

                              gsap.to(videoDivRef.current[videoId], {
                                   width:
                                        window.innerWidth < 760
                                             ? "10vw"
                                             : window.innerWidth < 1200
                                                  ? "10vw"
                                                  : "4vw",
                              });

                              gsap.to(span[videoId], {
                                   width: `${currentProgress}%`,
                                   backgroundColor: "white",
                              });
                         }
                    },

                    onComplete: () => {
                         if (isPlaying) {
                              gsap.to(videoDivRef.current[videoId], {
                                   width: "12px",
                              });
                              gsap.to(span[videoId], {
                                   backgroundColor: "#afafaf",
                              });
                         }
                    },
               });

               if (videoId === 0) {
                    anim.restart();
               }

               const animUpdate = () => {
                    if (videoRef.current[videoId]) {
                         anim.progress(
                              videoRef.current[videoId]!.currentTime /
                              highlightsSlides[videoId].videoDuration
                         );
                    }
               };

               if (isPlaying) {
                    gsap.ticker.add(animUpdate);
               } else {
                    gsap.ticker.remove(animUpdate);
               }
          }
     }, [videoId, startPlay, isPlaying]);

     useEffect(() => {
          if (loadedData.length > 3) {
               if (!isPlaying) {
                    videoRef.current[videoId]?.pause();
               } else {
                    startPlay && videoRef.current[videoId]?.play();
               }
          }
     }, [startPlay, videoId, isPlaying, loadedData]);

     const handleProcess = (type: string, i?: number) => {
          switch (type) {
               case "video-end":
                    setVideo((pre) => ({ ...pre, isEnd: true, videoId: (i ?? 0) + 1 }));
                    break;

               case "video-last":
                    setVideo((pre) => ({ ...pre, isLastVideo: true }));
                    break;

               case "video-reset":
                    setVideo((pre) => ({ ...pre, videoId: 0, isLastVideo: false }));
                    break;

               case "pause":
                    setVideo((pre) => ({ ...pre, isPlaying: !pre.isPlaying }));
                    break;

               case "play":
                    setVideo((pre) => ({ ...pre, isPlaying: !pre.isPlaying }));
                    break;

               default:
                    return video;
          }
     };

     const handleLoadedMetaData = (i: number, e: Event) =>
          setLoadedData((pre) => [...pre, e]);

     return (
          <>
               <div className="flex items-center">
                    {highlightsSlides.map((list: HighlightsSlide, i: number) => (
                         <div key={list.id} id="slider" className="sm:pr-20 pr-10">
                              <div className="video-carousel_container">
                                   <div className="w-full h-full flex-center rounded-3xl overflow-hidden bg-black">
                                        <video
                                             id="video"
                                             playsInline
                                             className={`${list.id === 2 ? "translate-x-44" : ""
                                                  } pointer-events-none object-cover`}
                                             preload="auto"
                                             muted
                                             ref={(el) => {
                                                  videoRef.current[i] = el;
                                             }}
                                             onEnded={() =>
                                                  i !== 3
                                                       ? handleProcess("video-end", i)
                                                       : handleProcess("video-last")
                                             }
                                             onPlay={() =>
                                                  setVideo((pre) => ({ ...pre, isPlaying: true }))
                                             }
                                             onLoadedMetadata={(e: any) => handleLoadedMetaData(i, e)}
                                        >
                                             <source src={list.video} type="video/mp4" />
                                        </video>
                                   </div>

                                   <div className="absolute top-12 left-[5%] z-10">
                                        {list.textLists.map((text, i) => (
                                             <p key={i} className="md:text-xl sm:text-lg text-base font-medium">
                                                  {text}
                                             </p>
                                        ))}
                                   </div>
                              </div>
                         </div>
                    ))}
               </div>

               <div className="relative flex-center mt-10">
                    <div className="flex-center py-5 px-7 bg-gray-300 backdrop-blur rounded-full">
                         {videoRef.current.map((_, i) => (
                              <span
                                   key={i}
                                   className="mx-2 w-3 h-3 bg-gray-200 rounded-full relative cursor-pointer"
                                   ref={(el) => {
                                        videoDivRef.current[i] = el;
                                   }}
                              >
                                   <span
                                        className="absolute h-full w-full rounded-full"
                                        ref={(el) => {
                                             videoSpanRef.current[i] = el;
                                        }}
                                   />
                              </span>
                         ))}
                    </div>

                    <button className="control-btn">
                         <Image
                              src={isLastVideo ? replayImg : !isPlaying ? playImg : pauseImg}
                              alt={isLastVideo ? "replay" : !isPlaying ? "play" : "pause"}
                              onClick={() =>
                                   isLastVideo
                                        ? handleProcess("video-reset")
                                        : !isPlaying
                                             ? handleProcess("play")
                                             : handleProcess("pause")
                              }
                         />
                    </button>
               </div>
          </>
     );
};

export default VideoCarousel;