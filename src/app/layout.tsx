import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { ThemeProvider } from "../../components/ui/theme-provider"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
     title: "Remotikal, Inc.",
     description: "We are an innovative company from India. We specialize in creating modern software, working on artificial intelligence (AI), developing neural networks, and engaging in kernel development.",
};

export default function RootLayout({
     children,
}: Readonly<{
     children: React.ReactNode;
}>) {
     return (
          <html lang="en" className={GeistSans.className}>
               <body className="dark:bg-neutral-950">
                    <ThemeProvider
                         attribute="class"
                         defaultTheme="system"
                         enableSystem
                         disableTransitionOnChange
                    >
                         {/* light background */}
                         <div className="dark:invisible absolute top-0 z-[-2] h-screen w-full bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"></div>
                         {/* dark background */}
                         <div className="light:invisible dark:absolute dark:top-0 dark:z-[-2] dark:h-screen dark:w-full dark:bg-neutral-950 dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

                         <div className="container">
                              <Navbar />
                              <hr className="h-px hidden md:block md:py-0 bg-gray-200 border-0 dark:bg-gray-700" />
                              {children}
                              <hr className="h-px mt-20 mb-14 md:py-0 bg-gray-200 border-0 dark:bg-gray-700" />
                              <Footer />
                         </div>
                    </ThemeProvider>
               </body>
          </html>
     );
}
