import { Building2Icon, ThumbsUpIcon, Users2Icon } from "lucide-react";

export default function VisionsPage() {
     return (
          <section className="flex flex-col gap-12">
               {/* Icon Blocks */}
               <div className="mx-auto">
                    {/* Grid */}
                    <div className="grid gap-12">
                         <div>
                              <h2 className="text-3xl font-bold lg:text-4xl">Our Vision</h2>
                              <p className="mt-3 text-muted-foreground md:text-lg">
                                   For as long as there have been cities, the public square has
                                   been a fundamental part of the urban landscape - an open,
                                   approachable space to meet and engage with friends and
                                   neighbours. Space aims to capture this spirit of bringing people
                                   together in an exciting, welcoming environment.
                              </p>
                         </div>
                         <div className="space-y-6 lg:space-y-10">
                              {/* Icon Block */}
                              <div className="flex">
                                   <Building2Icon className="flex-shrink-0 mt-2 h-6 w-6" />
                                   <div className="ms-5 sm:ms-8">
                                        <h3 className="text-base sm:text-lg font-semibold">
                                             High quality Co-Living spaces
                                        </h3>
                                        <p className="mt-1 text-muted-foreground md:text-lg">
                                             Our fully furnished spaces are designed and purpose-built
                                             with Co-Living in mind, featuring high-end finishes and
                                             amenities that go far beyond traditional apartment
                                             buildings.
                                        </p>
                                   </div>
                              </div>
                              {/* End Icon Block */}
                              {/* Icon Block */}
                              <div className="flex">
                                   <Users2Icon className="flex-shrink-0 mt-2 h-6 w-6" />
                                   <div className="ms-5 sm:ms-8">
                                        <h3 className="text-base sm:text-lg font-semibold">
                                             Fostering vibrant communities
                                        </h3>
                                        <p className="mt-1 text-muted-foreground md:text-lg">
                                             Our passion is bringing people together. Beyond creating
                                             beautiful spaces, we provide shared experiences.
                                        </p>
                                   </div>
                              </div>
                              {/* End Icon Block */}
                              {/* Icon Block */}
                              <div className="flex">
                                   <ThumbsUpIcon className="flex-shrink-0 mt-2 h-6 w-6" />
                                   <div className="ms-5 sm:ms-8">
                                        <h3 className="text-base sm:text-lg font-semibold">
                                             Simple and all-inclusive
                                        </h3>
                                        <p className="mt-1 text-muted-foreground md:text-lg">
                                             We worry about the details so that our residents don&apos;t
                                             have to. From our online application process to simple,
                                             all-inclusive billing we aim to make the living experience
                                             as effortless as possible.
                                        </p>
                                   </div>
                              </div>
                              {/* End Icon Block */}
                         </div>
                    </div>
                    {/* End Grid */}
               </div>
               {/* End Icon Blocks */}
          </section>
     );
}