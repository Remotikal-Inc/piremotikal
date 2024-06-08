import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea"
import { getFormURL } from "@/constants";

export default function ContactPage() {
     return (
          <>
               <div className="text-center">
                    {/* Title */}
                    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                         Get in Touch
                    </h1>
                    <p className="mt-3 text-xl text-muted-foreground">
                         We&apos;d love to hear from you! Whether you have questions about our services, or need support, we&apos;re here to help.
                    </p>
                    <form action={getFormURL} method="POST">
                         <div className="my-4 flex flex-row gap-4">
                              <Label htmlFor="firstName" className="sr-only">
                                   Full name
                              </Label>
                              <Input type="text" name="name" id="firstName" placeholder="Full name" className="dark:bg-neutral-900" />
                              <Label htmlFor="email" className="sr-only">
                                   Email
                              </Label>
                              <Input type="email" name="email" id="email" placeholder="Email" className="dark:bg-neutral-900" />
                         </div>
                         <div className="mb-4">
                              <Label htmlFor="message" className="sr-only">
                                   Message
                              </Label>
                              <Textarea name="message" placeholder="Type your message here." className="dark:bg-neutral-900 text-md" />
                         </div>
                         <div className="grid">
                              <Button size={'lg'} type="submit">Send</Button>
                         </div>
                    </form>
               </div>
          </>
     );
}
