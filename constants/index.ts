import { COBEOptions } from "cobe";

export const products = [
     {
          id: 1,
          name: "Sketchware",
          image: "https://sketchware-docs.vercel.app/img/logo.png",
          description: "Sketchware lets you build mobile apps using lego-like blocks. Block language lets you go beyond prebuilt widgets, allowing your application to be flexible and scalable.",
          links: {
               homepage: "https://sketchware.remotikal.com",
               github: "https://github.com/Sketchware-Pro/Sketchware-Pro",
               website: "https://sketchware.pro"
          }
     },
     {
          id: 2,
          name: "BlissOS",
          image: "TODO",
          description: "Android for your PC. An Android-based open source OS that incorporates many optimizations, features, and that supports many more devices.",
          links: {
               github: "https://github.com/BlissRoms-x86",
               website: "https://blissos.org/"
          }
     },
     {
          id: 3,
          name: "Renux",
          image: "TODO",
          description: "A kernel that can run Android, Linux, and Windows software independently together. Coming Soon.",
          links: {
               github: "TODO",
               website: "TODO"
          }
     },
     {
          id: 4,
          name: "Refresh Browser",
          image: "TODO",
          description: "A browser that uses Tor and Pi TurboNet which pipes you through into decentralized network. An independent browser built by Remotikal. Coming Soon.",
          links: {
               github: "TODO",
               website: "TODO"
          }
     }
];

export const footerLinks = [
     {
          id: 1,
          label: "Contact",
          url: "https://www.remotikal.com/contact"
     },
     {
          id: 2,
          label: "Investors",
          url: "https://www.remotikal.com/ir"
     },
     {
          id: 3,
          label: "Donate",
          url: "https://www.remotikal.com/donate"
     },
     {
          id: 4,
          label: "Privacy",
          url: "https://www.remotikal.com/statements/privacy"
     },
     {
          id: 5,
          label: "Terms",
          url: "https://www.remotikal.com/terms"
     },
     {
          id: 6,
          label: "Products",
          url: "https://www.remotikal.com/products"
     },
     {
          id: 7,
          label: "Blog",
          url: "/blog"
     }
];

export const wordsToAnimateHero = ["modern", "innovative", "advanced", "powerful"];

export const wordsToAnimateSkynet = ["code", "feel", "evolve", "write"];

export const navbarItems = [
     {
          id: 1,
          name: "Home",
          slug: "/#home"
     },
     {
          id: 2,
          name: "About",
          slug: "/about"
     },
     {
          id: 3,
          name: "Products",
          slug: "/products"
     },
     {
          id: 4,
          name: "Investors",
          slug: "/investors"
     },
     {
          id: 5,
          name: "Blog",
          slug: "/blog"
     },
     {
          id: 6,
          name: "Skynet",
          slug: "/skynet"
     },
     {
          id: 7,
          name: "Contact",
          slug: "/#contact"
     },
]

export const GLOBE_CONFIG_DARK: COBEOptions = {
     width: 800,
     height: 800,
     onRender: () => { },
     devicePixelRatio: 2,
     phi: 0,
     theta: 0.3,
     dark: 1,
     diffuse: 0.4,
     mapSamples: 16000,
     mapBrightness: 1.2,
     baseColor: [1, 1, 1],
     markerColor: [251 / 255, 100 / 255, 21 / 255],
     glowColor: [0.2, 0.2, 0.2],
     markers: [
          { location: [14.5995, 120.9842], size: 0.03 },
          { location: [19.076, 72.8777], size: 0.1 },
          { location: [23.8103, 90.4125], size: 0.05 },
          { location: [30.0444, 31.2357], size: 0.07 },
          { location: [39.9042, 116.4074], size: 0.08 },
          { location: [-23.5505, -46.6333], size: 0.1 },
          { location: [19.4326, -99.1332], size: 0.1 },
          { location: [40.7128, -74.006], size: 0.1 },
          { location: [34.6937, 135.5022], size: 0.05 },
          { location: [41.0082, 28.9784], size: 0.06 },
     ],
};

export const GLOBE_CONFIG_LIGHT: COBEOptions = {
     width: 800,
     height: 800,
     onRender: () => { },
     devicePixelRatio: 2,
     phi: 0,
     theta: 0.3,
     dark: 0.1,
     diffuse: 0.4,
     mapSamples: 16000,
     mapBrightness: 1.2,
     baseColor: [1, 1, 1],
     markerColor: [251 / 255, 100 / 255, 21 / 255],
     glowColor: [1, 1, 1],
     markers: [
          { location: [14.5995, 120.9842], size: 0.03 },
          { location: [19.076, 72.8777], size: 0.1 },
          { location: [23.8103, 90.4125], size: 0.05 },
          { location: [30.0444, 31.2357], size: 0.07 },
          { location: [39.9042, 116.4074], size: 0.08 },
          { location: [-23.5505, -46.6333], size: 0.1 },
          { location: [19.4326, -99.1332], size: 0.1 },
          { location: [40.7128, -74.006], size: 0.1 },
          { location: [34.6937, 135.5022], size: 0.05 },
          { location: [41.0082, 28.9784], size: 0.06 },
     ],
};