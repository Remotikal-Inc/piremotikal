import { PanelsTopLeft, Zap, Users2Icon, BrainCircuit } from "lucide-react";

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
                                   At Remotikal Inc., we dream of a world where developers have the tools and platforms they need to build innovative, powerful applications with ease. We aim to be the go-to place for developers to create, collaborate, and bring their ideas to life, making a positive impact on the world.
                              </p>
                         </div>
                         <div className="space-y-6 lg:space-y-10">
                              {/* Icon Block */}
                              <div className="flex">
                                   <PanelsTopLeft className="flex-shrink-0 mt-2 h-6 w-6" />
                                   <div className="ms-5 sm:ms-8">
                                        <h3 className="text-base sm:text-lg font-semibold">
                                             Effortless Hosting with Pihost
                                        </h3>
                                        <p className="mt-1 text-muted-foreground md:text-lg">
                                             We understand the challenges developers face when it comes to hosting their projects. That&apos;s why we created Pihost, a platform similar to Vercel, that makes it simple and fast to host your applications. With Pihost, you can focus on building great software while we take care of the hosting. Whether you&apos;re building a web project or a Python machine learning application, Pihost has you covered with 99.99% uptime for web projects and 98% uptime for machine learning projects.
                                        </p>
                                   </div>
                              </div>
                              {/* End Icon Block */}
                              {/* Icon Block */}
                              <div className="flex">
                                   <BrainCircuit className="flex-shrink-0 mt-2 h-6 w-6" />
                                   <div className="ms-5 sm:ms-8">
                                        <h3 className="text-base sm:text-lg font-semibold">
                                             Advancing AI with Skynet
                                        </h3>
                                        <p className="mt-1 text-muted-foreground md:text-lg">
                                             We believe that AI should be more than just algorithms. With Skynet Nexus, our cutting-edge AI platform, we&apos;re building emotionally intelligent AI systems that can understand and interact with humans on a deeper level. By creating AI with feelings and emotions, we aim to unlock new possibilities and redefine what AI can do.
                                        </p>
                                   </div>
                              </div>
                              {/* End Icon Block */}
                              {/* Icon Block */}
                              <div className="flex">
                                   <Zap className="flex-shrink-0 mt-2 h-6 w-6" />
                                   <div className="ms-5 sm:ms-8">
                                        <h3 className="text-base sm:text-lg font-semibold">
                                             Empowering Developers with a Powerful Building Base
                                        </h3>
                                        <p className="mt-1 text-muted-foreground md:text-lg">
                                             We&apos;re committed to providing developers with a robust foundation and the resources they need to build remarkable applications. Our platform offers a wide range of APIs, tools, and services that make it easy to integrate powerful functionality into your projects. But we don&apos;t stop there. We also offer Remotikal TensorCloud, a service that allows you to host small or large AI models with ease. With a collection of over 100 pre-trained models and 123 datasets, developers can quickly fine-tune, develop, and deploy their AI applications globally. Whether you&apos;re building a mobile app, a web service, an enterprise system, or an AI-powered solution, we provide the building blocks for your success.
                                        </p>
                                   </div>
                              </div>
                              {/* End Icon Block */}
                              {/* Icon Block */}
                              <div className="flex">
                                   <Users2Icon className="flex-shrink-0 mt-2 h-6 w-6" />
                                   <div className="ms-5 sm:ms-8">
                                        <h3 className="text-base sm:text-lg font-semibold">
                                             Building a Community of Innovators
                                        </h3>
                                        <p className="mt-1 text-muted-foreground md:text-lg">
                                             At Remotikal Inc., we believe in the power of community. We&apos;re not just a platform; we&apos;re a community of developers, innovators, and visionaries passionate about building the future. We foster collaboration, knowledge sharing, and support so that we can create applications that make a real difference in people&apos;s lives.
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