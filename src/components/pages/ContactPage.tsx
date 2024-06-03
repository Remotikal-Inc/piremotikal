import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import { Textarea } from "../../../components/ui/textarea"

export default function ContactPage() {
     return (
          <>
               <div className="text-center">
                    {/* Title */}
                    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                         Solving problems for every team
                    </h1>
                    <p className="mt-3 text-xl text-muted-foreground">
                         Teams use Shadcn UI to build beautiful cross-platform hybrid apps
                         in a fraction of the time.
                    </p>
                    <form>
                         <div className="my-4 flex flex-row gap-4">
                              <Label htmlFor="firstName" className="sr-only">
                                   Full name
                              </Label>
                              <Input type="text" id="firstName" placeholder="Full name" className="dark:bg-neutral-900" />
                              <Label htmlFor="email" className="sr-only">
                                   Email
                              </Label>
                              <Input type="email" id="email" placeholder="Email" className="dark:bg-neutral-900" />
                         </div>
                         <div className="mb-4">
                              <Label htmlFor="password" className="sr-only">
                                   Password
                              </Label>
                              <Textarea placeholder="Type your message here." className="dark:bg-neutral-900" />
                         </div>
                         <div className="grid">
                              <Button size={'lg'}>Sign up</Button>
                         </div>
                    </form>
                    {/* End Form */}
               </div>
          </>
     );
}
