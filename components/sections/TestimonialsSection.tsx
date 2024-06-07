import Marquee from "@/components/magicui/marquee";
import { reviews } from '@/constants'
import ReviewCard from "../ReviewCard";

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

export default function TestimonialsPage() {
     return (
          <div className="relative flex h-full w-full flex-col justify-center overflow-hidden rounded-lg bg-background py-10">
               <h1 className="pb-10 text-3xl font-bold lg:text-4xl">What Our Customers Say About Us</h1>

               <Marquee pauseOnHover className="[--duration:20s]">
                    {firstRow.map((review) => (
                         <ReviewCard key={review.username} {...review} />
                    ))}
               </Marquee>
               <Marquee reverse pauseOnHover className="[--duration:20s]">
                    {secondRow.map((review) => (
                         <ReviewCard key={review.username} {...review} />
                    ))}
               </Marquee>
               <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3"></div>
               <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3"></div>
          </div>
     );
};