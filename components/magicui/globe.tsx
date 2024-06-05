"use client";

import { GLOBE_CONFIG_LIGHT } from "@/constants";
import { cn } from "@/lib/utils";
import createGlobe, { COBEOptions } from "cobe";
import { useCallback, useEffect, useRef } from "react";
import { useSpring } from "react-spring";

export default function Globe({
     className,
     config = GLOBE_CONFIG_LIGHT,
}: {
     className?: string;
     config?: COBEOptions;
}) {
     let phi = 0;
     let width = 0;
     const canvasRef = useRef<HTMLCanvasElement>(null);
     const pointerInteracting = useRef(null);
     const pointerInteractionMovement = useRef(0);
     const [{ r }, api] = useSpring(() => ({
          r: 0,
          config: {
               mass: 1,
               tension: 280,
               friction: 40,
               precision: 0.001,
          },
     }));

     const updatePointerInteraction = (value: any) => {
          pointerInteracting.current = value;
          canvasRef.current!.style.cursor = value ? "grabbing" : "grab";
     };

     const updateMovement = (clientX: any) => {
          if (pointerInteracting.current !== null) {
               const delta = clientX - pointerInteracting.current;
               pointerInteractionMovement.current = delta;
               api.start({ r: delta / 200 });
          }
     };

     const onRender = useCallback(
          (state: Record<string, any>) => {
               if (!pointerInteracting.current) phi += 0.005;
               state.phi = phi + r.get();
               state.width = width * 2;
               state.height = width * 2;
          },
          [pointerInteracting, phi, r],
     );

     const onResize = () => {
          if (canvasRef.current) {
               width = canvasRef.current.offsetWidth;
          }
     };

     useEffect(() => {
          window.addEventListener("resize", onResize);
          onResize();

          const globe = createGlobe(canvasRef.current!, {
               ...config,
               width: width * 2,
               height: width * 2,
               onRender,
          });

          setTimeout(() => (canvasRef.current!.style.opacity = "1"));
          return () => globe.destroy();
     });

     return (
          <div
               className={cn(
                    "absolute inset-0 mx-auto aspect-[1/1] w-full max-w-[600px]",
                    className,
               )}
          >
               <canvas
                    className={cn(
                         "h-full w-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]",
                    )}
                    ref={canvasRef}
                    onPointerDown={(e) =>
                         updatePointerInteraction(
                              e.clientX - pointerInteractionMovement.current,
                         )
                    }
                    onPointerUp={() => updatePointerInteraction(null)}
                    onPointerOut={() => updatePointerInteraction(null)}
                    onMouseMove={(e) => updateMovement(e.clientX)}
                    onTouchMove={(e) =>
                         e.touches[0] && updateMovement(e.touches[0].clientX)
                    }
               />
          </div>
     );
}