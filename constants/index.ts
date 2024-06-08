import { highlightFirstVideo, highlightSecondVideo, highlightThirdVideo, highlightFourthVideo } from "@/utils";
import { COBEOptions } from "cobe";

export const footerLinks = [
     {
          id: 1,
          label: "Contact",
          url: "#contact"
     },
     {
          id: 2,
          label: "Investors",
          url: "https://investors.remotikal.com"
     },
     {
          id: 3,
          label: "Donate",
          url: "https://donate.remotikal.com"
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
          slug: "https://about.remotikal.com"
     },
     {
          id: 3,
          name: "Products",
          slug: "/products"
     },
     {
          id: 4,
          name: "Investors",
          slug: "https://investors.remotikal.com"
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

export const reviews = [
     {
          name: "Arjun Vijay Prakash",
          username: "@arjuncodess",
          post: "Full Stack Developer",
          body: "Amazing no-code tool(Sketchware) built by Besome & Remotikal(maintained by the latter)! Advanced functionalities like Firebase integration or even text-to-speech or vice verse are so simple to implement.",
          img: "https://avatar.vercel.sh/jack",
     },
     {
          name: "Jill",
          username: "@jill",
          post: "software developer",
          body: "I don't know what to say. I'm speechless. This is amazing.",
          img: "https://avatar.vercel.sh/jill",
     },
     {
          name: "John",
          username: "@john",
          post: "software developer",
          body: "I'm at a loss for words. This is amazing. I love it.",
          img: "https://avatar.vercel.sh/john",
     },
     {
          name: "Jane",
          username: "@jane",
          post: "software developer",
          body: "I'm at a loss for words. This is amazing. I love it.",
          img: "https://avatar.vercel.sh/jane",
     },
     {
          name: "Jenny",
          username: "@jenny",
          post: "software developer",
          body: "I'm at a loss for words. This is amazing. I love it.",
          img: "https://avatar.vercel.sh/jenny",
     },
     {
          name: "James",
          username: "@james",
          post: "software developer",
          body: "I'm at a loss for words. This is amazing. I love it.",
          img: "https://avatar.vercel.sh/james",
     },
];

export const highlightsSlides = [
     {
          id: 1,
          textLists: [
               "Enter A17 Pro.",
               "Game‑changing chip.",
               "Groundbreaking performance.",
          ],
          video: highlightFirstVideo,
          videoDuration: 4,
     },
     {
          id: 2,
          textLists: ["Titanium.", "So strong. So light. So Pro."],
          video: highlightSecondVideo,
          videoDuration: 2,
     },
     {
          id: 3,
          textLists: [
               "iPhone 15 Pro Max has the",
               "longest optical zoom in",
               "iPhone ever. Far out.",
          ],
          video: highlightThirdVideo,
          videoDuration: 5,
     },
     {
          id: 4,
          textLists: ["All-new Action button.", "What will yours do?."],
          video: highlightFourthVideo,
          videoDuration: 3.63,
     },
];

export const getFormURL = "";