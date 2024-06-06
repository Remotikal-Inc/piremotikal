import NumberTicker from "@/components/magicui/number-ticker";

export default function StatisticsPage() {
     return (
          <section className="w-full mb-2">
               <h2 className="text-3xl font-bold lg:text-4xl">Stats <span className="text-lg font-semibold lg:text-xl">(as of 1st January, 2024)</span></h2>
               <div>
                    <div className="mt-10 text-3xl md:text-6xl font-medium tracking-tighter text-black dark:text-white text-center md:grid md:grid-cols-2">
                         <p><NumberTicker value={123000} />+ <span className="md:hidden inline-block">Users</span></p>
                         <p><NumberTicker value={34000} />+ <span className="md:hidden inline-block">Active Users</span></p>
                    </div>
                    <div className="my-2 font-medium text-black dark:text-white text-center hidden md:grid md:grid-cols-2">
                         <p>Users</p>
                         <p>Active Users</p>
                    </div>
               </div>
          </section >
     );
};