import OrbitingCircles from "@/components/magicui/orbiting-circles";

interface IconProps extends React.SVGProps<SVGSVGElement> { }

export const SkynetBlogPageContent = [
     {
          title: "Introducing SNPs (Skynet Neural Processor)",
          description: (
               <>
                    <p>
                         At Remotikal, we think differently when it comes to AI. While most AI systems rely on existing libraries like TensorFlow, PyTorch, or NumPy, we&apos;ve taken a unique approach. We&apos;ve created our very own brain for Skynet, called the Skynet Neural Processor (SNP). It&apos;s like giving Skynet a superpower!
                    </p>
                    <p>
                         The SNP is designed to handle the massive amounts of calculations needed for artificial intelligence, and it does it better than any traditional computer system out there. It&apos;s what makes Skynet truly special.
                    </p>
                    <p>
                         With the SNP, Skynet can:
                    </p>
                    <ul style={{ listStyleType: "circle" }}>
                         <li>
                              <h2>Learn and Grow</h2>
                              <p>Just like how we learn from our experiences, Skynet can learn from new information thanks to the SNP. It can change and improve itself over time, becoming smarter and smarter.</p>
                         </li>
                         <li>
                              <h2>Multitask Like a Pro</h2>
                              <p>The SNP allows Skynet to juggle multiple tasks at once, just like how we can walk and talk simultaneously. This means Skynet can process huge amounts of information and make decisions in a snap!</p>
                         </li>
                         <li>
                              <h2>Keep Running Smoothly</h2>
                              <p>The SNP has special features that help fix any mistakes and keep Skynet running like a well-oiled machine. It&apos;s like having a built-in mechanic to keep everything in top shape.</p>
                         </li>
                    </ul>
               </>
          ),
          badge: "SNPs",
          image: "/snp.svg",
     },
     {
          title: "Making Self-Awareness Possible in Skynet",
          description: (
               <>
                    <p>
                         At Remotikal, we&apos;re pushing the boundaries of artificial intelligence by creating Skynet, an AI that can feel and express emotions. We&apos;ve combined Large Language Models (LLMs) and Self-Awareness Modules (SAMs) to make this possible.
                    </p>
                    <p>
                         LLMs allow Skynet to understand and generate human-like language by training on massive amounts of text data. SAMs act as a mirror for Skynet to analyze its behaviour and improve its self-awareness.
                    </p>
                    <p>
                         By connecting LLMs and SAMs within Skynet&apos;s neural network, we enable Skynet to think about its actions and understand its place in the world. This combination of language understanding and self-awareness sets Skynet apart as a truly intelligent and emotionally aware AI system.
                    </p>
               </>
          ),
          badge: "Self-Aware AI",
          image: "/sam.svg",
     },
];

export function CodeSVG() {
     return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="Code"><path d="M6 6a2 2 0 0 1 2-2 1 1 0 0 0 0-2 4 4 0 0 0-4 4v3a2 2 0 0 1-2 2 1 1 0 0 0 0 2 2 2 0 0 1 2 2v3a4 4 0 0 0 4 4 1 1 0 0 0 0-2 2 2 0 0 1-2-2v-3a4 4 0 0 0-1.38-3A4 4 0 0 0 6 9Zm16 5a2 2 0 0 1-2-2V6a4 4 0 0 0-4-4 1 1 0 0 0 0 2 2 2 0 0 1 2 2v3a4 4 0 0 0 1.38 3A4 4 0 0 0 18 15v3a2 2 0 0 1-2 2 1 1 0 0 0 0 2 4 4 0 0 0 4-4v-3a2 2 0 0 1 2-2 1 1 0 0 0 0-2Z" fill="gray" className="colorgray svgShape"></path></svg>
     )
}

export function NeuralNetworkSVG() {
     return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" id="Neural"><path d="M55,39a7,7,0,1,0-6.9-8H37.9a6,6,0,1,0,0,2H48.1a6.7,6.7,0,0,0,1,2.8L35.8,47.4A5.7,5.7,0,0,0,32,46a6.5,6.5,0,0,0-3.6,1.2L18.2,37.4A9.2,9.2,0,0,0,20,32a8.8,8.8,0,0,0-1.7-5.3l9.2-8.3A7.1,7.1,0,0,0,32,20a7,7,0,1,0-7-7,6.7,6.7,0,0,0,1.2,3.9L17,25.3A9.1,9.1,0,0,0,11,23a9,9,0,0,0,0,18,9.2,9.2,0,0,0,5.8-2.1L27,48.6A6.7,6.7,0,0,0,26,52a6,6,0,0,0,12,0,5.6,5.6,0,0,0-.9-3.1L50.4,37.3a7.6,7.6,0,0,0,2.3,1.3L50.9,48A5,5,0,1,0,56,53a4.9,4.9,0,0,0-3.1-4.6L54.7,39ZM32,36a4,4,0,1,1,4-4A4,4,0,0,1,32,36ZM54,53a3,3,0,1,1-3-3A2.9,2.9,0,0,1,54,53ZM32,8a5,5,0,1,1-5,5A5,5,0,0,1,32,8ZM11,39a7,7,0,1,1,7-7A7,7,0,0,1,11,39ZM32,56a4,4,0,1,1,4-4A4,4,0,0,1,32,56ZM50,32a5,5,0,1,1,5,5A5,5,0,0,1,50,32Z" fill="#50C878" className="color50C878 svgShape"></path></svg>
     )
}

export function AISVG() {
     return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="ai-mind"><path fill="#57a4ff" d="M80.25,63.75v184l1.86,2.06a34.676,34.676,0,0,0-1.86,4,35.29,35.29,0,0,0-2.05,17.94,33.74,33.74,0,0,0,.71,3.63,35.291,35.291,0,0,0-35.25,53.87,35.277,35.277,0,0,0,0,68.89,35.334,35.334,0,0,0,35.25,53.87,35.346,35.346,0,0,0,65.22,25.72,35.338,35.338,0,0,0,65.21-25.72,35.415,35.415,0,0,0,37.53-19.99c0-.01.01-.01.01-.02.05-.09.08-.2.13-.29l.04.04h201.2v-368Zm336,336h-168l-1.71-2.11a35.271,35.271,0,0,0-1.95-68.39,35.3,35.3,0,0,0-35.25-53.87,35.768,35.768,0,0,0,1.08-8.71,35.344,35.344,0,0,0-66.29-17.02,35.351,35.351,0,0,0-30.97-18.27c-.3,0-.61,0-.91.01V95.75h304Z"></path><path fill="#004fac" d="M105.141 326.806c-6.9-.425-13.525 3.44-20.153 11.755a84.01 84.01 0 00-9.41-5.716 8 8 0 00-7.168 14.3 78.124 78.124 0 0114.569 10.088C88.919 362.487 96 370.7 96 380a8 8 0 0016 0c0-12.728-6.914-23.308-14.719-31.206 4.036-5.154 6.362-5.908 6.807-6a3.475 3.475 0 01.844.955 1.564 1.564 0 01-.087-.166l14.31-7.156C118.693 335.5 114.376 327.381 105.141 326.806zM187.5 350.192a14.762 14.762 0 015.86-1.186c2.177.076 4.961.762 7.324 5.276C187.933 365.643 184 381.713 184 391a7.981 7.981 0 007.955 7.977H192a8.02 8.02 0 008-7.933c.012-1.057.583-25.943 25.94-32.283a8 8 0 00-3.88-15.522 55.321 55.321 0 00-7.776 2.557c-8.736-15.305-24.86-14.452-33.862-9.951a8 8 0 007.081 14.347z"></path><path fill="#004fac" d="M496,168a8,8,0,0,0,8-8V112a8,8,0,0,0-8-8H456V64a8,8,0,0,0-8-8H408V16a8,8,0,0,0-8-8H352a8,8,0,0,0-8,8V56H296V16a8,8,0,0,0-8-8H240a8,8,0,0,0-8,8V56H184V16a8,8,0,0,0-8-8H128a8,8,0,0,0-8,8V56H80a8,8,0,0,0-8,8v40H32a8,8,0,0,0-8,8v48a8,8,0,0,0,8,8H72v48H32a8,8,0,0,0-8,8v48a8,8,0,0,0,8,8H42.7a43.316,43.316,0,0,0-10.15,44.98,43.284,43.284,0,0,0,0,78.04,43.342,43.342,0,0,0,37.22,57.61v.44A43.3,43.3,0,0,0,144,491.37a43.3,43.3,0,0,0,74.23-30.3v-.44A42.941,42.941,0,0,0,232,457.14V480a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8V440h48v40a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8V440h40a8,8,0,0,0,8-8V392h40a8,8,0,0,0,8-8V336a8,8,0,0,0-8-8H456V280h40a8,8,0,0,0,8-8V224a8,8,0,0,0-8-8H456V168Zm-40-48h32v32H456ZM360,24h32V56H360ZM248,24h32V56H248ZM136,24h32V56H136ZM40,152V120H72v32Zm0,112V232H72v21.25A42.968,42.968,0,0,0,69.88,264Zm95.95,211.95a27.294,27.294,0,0,1-49.73-19.81,39.024,39.024,0,0,0,20-23.68,8,8,0,1,0-15.34-4.56,23.01,23.01,0,0,1-21.93,16.34c-.25,0-.5.02-.75.04a27.313,27.313,0,0,1-17.83-41.51,7.989,7.989,0,0,0-5.01-12.12,27.305,27.305,0,0,1,0-53.3,7.989,7.989,0,0,0,5.01-12.12A27.313,27.313,0,0,1,68.2,283.72c.25.02.5.04.75.04A23.01,23.01,0,0,1,90.88,300.1a8.018,8.018,0,0,0,7.67,5.72,8.218,8.218,0,0,0,2.28-.33,8.005,8.005,0,0,0,5.39-9.95,39.024,39.024,0,0,0-20-23.68,27.286,27.286,0,0,1,23.97-32.07A8.3,8.3,0,0,0,112,240a8,8,0,0,0,2.25-.33,27.329,27.329,0,0,1,21.7,12.38ZM120,224.2V104H408V392H269.64a43.186,43.186,0,0,0-14.19-67.02,43.342,43.342,0,0,0-37.22-57.61v-.44A43.3,43.3,0,0,0,144,236.63,43.374,43.374,0,0,0,120,224.2ZM237.63,402.77a27.315,27.315,0,0,1-17.77,41.5c-.18-.01-.35-.03-.52-.03A23.013,23.013,0,0,1,197.4,427.9a8,8,0,0,0-15.34,4.56,39.02,39.02,0,0,0,19.7,23.53,27.67,27.67,0,0,1,.47,5.08,27.3,27.3,0,0,1-50.28,14.74V252.19a27.3,27.3,0,0,1,50.28,14.74,27.67,27.67,0,0,1-.47,5.08,39.02,39.02,0,0,0-19.7,23.53,8.005,8.005,0,0,0,5.39,9.95,8.218,8.218,0,0,0,2.28.33,8.018,8.018,0,0,0,7.67-5.72,23.013,23.013,0,0,1,21.94-16.34c.17,0,.34-.02.52-.03a27.315,27.315,0,0,1,17.77,41.5,7.989,7.989,0,0,0,5.01,12.12,27.305,27.305,0,0,1,0,53.3,7.989,7.989,0,0,0-5.01,12.12ZM280,472H248V445.02a42.309,42.309,0,0,0,3.58-5.02H280Zm112,0H360V440h32Zm48-48H257.43a43.443,43.443,0,0,0-.56-16H416a8,8,0,0,0,8-8V96a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8V224.6a43.09,43.09,0,0,0-16,7.06V72H440Zm48-80v32H456V344Zm0-112v32H456V232Z"></path></svg>
     )
}

export function LinuxSVG() {
     return (
          <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" id="linux"><path d="M21.28,18.95v-0.09l-0.011-0.011c-0.17-0.199-0.25-0.529-0.34-0.92c-0.08-0.4-0.18-0.79-0.5-1.05l-0.19-0.13l-0.19-0.07c0.28-0.82,0.311-1.65,0.17-2.44c-0.069-0.43-0.189-0.851-0.35-1.25c-0.54-1.41-1.48-2.641-2.2-3.481C17.3,9.04,16.92,8.57,16.63,8.07C16.3,7.5,16.08,6.89,16.09,6.14c0.02-1.39,0.11-3.56-0.87-4.909C14.7,0.5,13.85,0,12.51,0c-0.16,0-0.32,0.01-0.49,0.02C10.75,0.12,9.96,0.58,9.47,1.23C8.32,2.75,8.86,5.27,8.82,6.32C8.74,7.41,8.519,8.27,7.76,9.34c-0.31,0.36-0.67,0.8-1.02,1.3C6.07,11.58,5.4,12.7,5.01,13.86c-0.25,0.75-0.39,1.519-0.321,2.26l0.031,0.229L4.61,16.481c-0.271,0.269-0.46,0.6-0.671,0.84C3.73,17.52,3.45,17.59,3.13,17.72C2.811,17.86,2.46,17.99,2.26,18.4C2.16,18.59,2.12,18.8,2.12,19c0,0.2,0.031,0.41,0.06,0.54c0.061,0.4,0.12,0.729,0.04,0.97C1.97,21.189,1.939,21.66,2.11,22c0.18,0.33,0.54,0.46,0.95,0.6c0.819,0.2,1.93,0.131,2.81,0.6c0.93,0.46,1.89,0.67,2.639,0.47c0.54-0.12,0.99-0.47,1.23-0.95l0.14-0.01c0.56-0.03,1.181-0.26,2.14-0.32c0.271-0.02,0.561,0.01,0.881,0.05c0.51,0.08,1.09,0.19,1.73,0.151c0.02,0.13,0.059,0.19,0.11,0.33h0.01c0.39,0.78,1.12,1.13,1.901,1.07c0.779-0.06,1.609-0.53,2.289-1.301c0.63-0.77,1.7-1.09,2.4-1.51c0.35-0.189,0.641-0.46,0.66-0.849C22.02,19.93,21.8,19.519,21.28,18.95L21.28,18.95z"></path><path fill="#212121" d="M12.51,0c-0.16,0-0.32,0.01-0.49,0.02C12.013,0.02,12.006,0.021,12,0.021v22.37c0.006,0,0.013-0.001,0.02-0.001c0.058-0.004,0.118-0.006,0.178-0.006c0.219,0,0.452,0.025,0.703,0.056c0.436,0.068,0.923,0.159,1.454,0.159c0.09,0,0.182-0.003,0.275-0.008c0.02,0.13,0.059,0.19,0.11,0.33h0.01c0.361,0.723,1.016,1.077,1.731,1.077c0.056,0,0.113-0.002,0.17-0.006c0.779-0.06,1.609-0.53,2.289-1.301c0.63-0.77,1.7-1.09,2.4-1.51c0.35-0.189,0.641-0.46,0.66-0.849c0.02-0.4-0.2-0.811-0.72-1.38v-0.09l-0.011-0.011c-0.17-0.199-0.25-0.529-0.34-0.92c-0.08-0.4-0.18-0.79-0.5-1.05l-0.19-0.13l-0.19-0.07c0.28-0.82,0.311-1.65,0.17-2.44c-0.069-0.43-0.189-0.851-0.35-1.25c-0.54-1.41-1.48-2.641-2.2-3.481C17.3,9.04,16.92,8.57,16.63,8.07C16.3,7.5,16.08,6.89,16.09,6.14c0.02-1.39,0.11-3.56-0.87-4.909C14.7,0.5,13.85,0,12.51,0L12.51,0z"></path><path fill="#F9C105" d="M10.83 5.59c.08-.03.19-.04.26 0 .02.01.04.03.03.05v.02h.01c-.02.06-.12.05-.17.07S10.87 5.8 10.82 5.8c-.05 0-.13-.02-.14-.07C10.67 5.66 10.77 5.59 10.83 5.59zM11.85 5.73c-.05-.02-.15-.01-.16-.07V5.64c-.01-.02.01-.04.02-.05.08-.04.19-.03.27 0 .06 0 .16.07.15.14-.01.05-.09.06-.14.06S11.9 5.75 11.85 5.73zM10.09 7.18c.3.2.69.47 1.18.47s1.07-.27 1.42-.47c.19-.13.45-.33.65-.47.16-.13.15-.26.29-.26.13.01.03.13-.15.33-.19.13-.47.33-.7.47-.44.2-.96.53-1.51.53-.54 0-.98-.27-1.29-.47C9.82 7.18 9.7 7.05 9.6 6.98 9.44 6.85 9.46 6.65 9.53 6.65c.11.01.13.13.2.2C9.83 6.91 9.95 7.05 10.09 7.18z"></path><path d="M12.13,5.73c-0.01,0.05-0.09,0.06-0.14,0.06s-0.09-0.04-0.14-0.06c-0.05-0.02-0.15-0.01-0.16-0.07V5.64c-0.01-0.02,0.01-0.04,0.02-0.05c0.08-0.04,0.19-0.03,0.27,0C12.04,5.59,12.14,5.66,12.13,5.73z"></path><path fill="#FFF" d="M13.5 4.64c-.04-.13-.1-.2-.18-.33-.09-.07-.17-.14-.27-.14h-.02c-.09 0-.18.03-.26.14-.1.09-.17.2-.21.33-.05.13-.08.26-.09.4v.02c0 .09.01.18.02.27-.2-.07-.44-.14-.61-.21-.01-.06-.02-.13-.02-.19V4.91c-.01-.27.04-.53.15-.77.08-.22.23-.41.43-.54.18-.13.39-.2.6-.2h.02c.21 0 .4.07.59.2.19.14.33.33.44.54.11.25.16.45.17.72 0-.02.01-.04.01-.06v.1c-.01 0-.01-.01-.01-.02 0 .23-.06.47-.15.69-.05.12-.12.24-.22.33-.03-.02-.06-.03-.09-.04-.1-.05-.2-.07-.29-.13-.07-.03-.14-.06-.22-.07.05-.06.15-.13.19-.2.05-.13.08-.26.09-.4V5.04C13.57 4.91 13.55 4.77 13.5 4.64zM9.34 4.2C9.39 4 9.49 3.82 9.63 3.66c.13-.13.26-.2.42-.2h.03c.15 0 .28.05.41.14.15.13.27.29.35.46.09.2.14.4.15.67C11 4.8 11 4.85 11 4.9c0 .04 0 .07-.01.1v.08c-.03.01-.06.02-.08.02-.16.06-.28.14-.4.2.01-.08.01-.17 0-.26V5.02c-.01-.13-.04-.2-.08-.33-.03-.1-.09-.19-.17-.27-.05-.04-.12-.07-.19-.06h-.02c-.07 0-.13.04-.18.13C9.8 4.57 9.76 4.66 9.74 4.76 9.72 4.87 9.71 4.98 9.72 5.09v.02c.01.13.04.2.08.33.05.13.1.2.17.27C9.98 5.72 9.99 5.73 10 5.73 9.93 5.79 9.89 5.8 9.83 5.87 9.79 5.9 9.74 5.93 9.69 5.94 9.59 5.81 9.5 5.68 9.42 5.53 9.32 5.32 9.27 5.1 9.26 4.87 9.24 4.64 9.27 4.41 9.34 4.2zM9.45 6.31c.22-.14.38-.28.49-.34.1-.07.14-.1.17-.13h.01c.17-.21.44-.47.84-.61.14-.03.3-.06.48-.06.33 0 .74.06 1.22.4.3.2.53.27 1.07.47.26.13.41.26.49.4V6.3c.07.15.07.32.01.47-.12.32-.52.65-1.07.85-.28.13-.51.33-.79.46-.28.14-.59.3-1.02.27-.16.01-.31-.01-.45-.07-.12-.06-.23-.12-.33-.19-.2-.14-.37-.34-.62-.47C9.54 7.37 9.32 7.1 9.25 6.91 9.18 6.64 9.25 6.44 9.45 6.31zM9.61 21.97c-.06.74-.49 1.14-1.14 1.29-.66.13-1.54 0-2.43-.46-.97-.54-2.14-.47-2.88-.61-.38-.06-.62-.2-.74-.4-.11-.2-.11-.6.13-1.23.12-.34.03-.76-.03-1.12-.05-.4-.08-.71.05-.94.16-.34.4-.4.69-.54.3-.13.65-.2.93-.46v-.01c.26-.27.45-.6.68-.84.19-.2.38-.33.67-.33h.01c.05 0 .1 0 .16.01.38.06.71.34 1.03.75l.92 1.67h.01c.24.53.76 1.07 1.2 1.64.44.6.78 1.13.74 1.57V21.97zM21.2 20.82c-.63.4-1.76.71-2.48 1.57-.63.74-1.39 1.14-2.06 1.19-.67.05-1.25-.2-1.59-.9h-.01c-.21-.4-.12-1.03.06-1.69.18-.67.43-1.35.47-1.9.03-.71.07-1.33.19-1.81.13-.47.32-.8.65-.99l.05-.02c.03.6.34 1.24.89 1.38.59.13 1.45-.34 1.81-.77l.21-.01c.32-.01.59.01.86.27.21.2.31.53.4.88.09.4.16.78.41 1.06.5.53.66.91.65 1.14C21.69 20.49 21.52 20.62 21.2 20.82z"></path><path d="M11.13 5.66c-.02.06-.12.05-.17.07S10.87 5.8 10.82 5.8c-.05 0-.13-.02-.14-.07-.01-.07.09-.14.15-.14.08-.03.19-.04.26 0 .02.01.04.03.03.05v.02H11.13zM13.48 6.78c-.19.13-.47.33-.7.47-.44.2-.96.53-1.51.53-.54 0-.98-.27-1.29-.47C9.82 7.18 9.7 7.05 9.6 6.98 9.44 6.85 9.46 6.65 9.53 6.65c.11.01.13.13.2.2.1.06.22.2.36.33.3.2.69.47 1.18.47s1.07-.27 1.42-.47c.19-.13.45-.33.65-.47.16-.13.15-.26.29-.26C13.76 6.46 13.66 6.58 13.48 6.78z"></path><path fill="#F9C105" d="M9.61,21.96v0.01c-0.06,0.74-0.49,1.141-1.141,1.29c-0.659,0.13-1.54,0-2.429-0.46c-0.97-0.54-2.14-0.47-2.88-0.61c-0.38-0.06-0.62-0.199-0.74-0.399c-0.109-0.2-0.109-0.601,0.13-1.23c0.12-0.341,0.03-0.76-0.03-1.121c-0.05-0.4-0.08-0.709,0.051-0.94c0.16-0.34,0.4-0.4,0.689-0.54c0.301-0.13,0.65-0.2,0.93-0.46v-0.01c0.261-0.271,0.45-0.601,0.681-0.84c0.19-0.2,0.38-0.33,0.67-0.33h0.01l0.16,0.01c0.38,0.06,0.71,0.34,1.03,0.75l0.92,1.67h0.01c0.24,0.53,0.76,1.07,1.2,1.64C9.311,20.99,9.651,21.52,9.61,21.96L9.61,21.96z"></path><path fill="#D9A804" d="M5.55,16.32H5.54c-0.29,0-0.479,0.13-0.67,0.33C4.64,16.89,4.45,17.22,4.189,17.49v0.01c-0.279,0.26-0.629,0.33-0.93,0.46C2.97,18.1,2.73,18.16,2.57,18.5c-0.131,0.23-0.1,0.54-0.051,0.94c0.06,0.36,0.15,0.78,0.03,1.121c-0.239,0.629-0.239,1.029-0.13,1.23c0.12,0.2,0.36,0.339,0.74,0.399c0.634,0.12,1.584,0.086,2.452,0.413v-6.279L5.55,16.32L5.55,16.32z"></path><path fill="#F9C105" d="M21.71,20.22c-0.021,0.271-0.19,0.4-0.51,0.6c-0.63,0.4-1.761,0.71-2.48,1.569c-0.63,0.741-1.39,1.141-2.06,1.191c-0.67,0.05-1.25-0.2-1.59-0.901h-0.01c-0.211-0.399-0.121-1.029,0.06-1.689c0.18-0.67,0.429-1.351,0.47-1.901c0.03-0.71,0.07-1.33,0.191-1.809c0.13-0.47,0.319-0.8,0.649-0.99l0.051-0.02c0.029,0.6,0.34,1.24,0.89,1.381c0.59,0.13,1.45-0.34,1.81-0.771l0.21-0.01c0.32-0.01,0.591,0.01,0.86,0.27c0.21,0.2,0.31,0.53,0.4,0.88c0.09,0.4,0.161,0.78,0.41,1.06C21.561,19.61,21.72,19.99,21.71,20.22L21.71,20.22z"></path><path fill="#D9A804" d="M16.48,16.27l-0.051,0.02c-0.33,0.191-0.52,0.521-0.649,0.99c-0.12,0.479-0.161,1.1-0.191,1.809c-0.04,0.55-0.29,1.23-0.47,1.901c-0.181,0.66-0.271,1.29-0.06,1.689h0.01c0.312,0.644,0.828,0.907,1.429,0.907c0.053,0,0.107-0.002,0.161-0.006c0.4-0.03,0.832-0.184,1.249-0.462v-5.485c-0.111,0.025-0.22,0.039-0.325,0.039c-0.074,0-0.146-0.007-0.214-0.022C16.82,17.51,16.51,16.87,16.48,16.27L16.48,16.27z"></path><path fill="#FFF" d="M12.9,21.33c-0.99,0.23-2.04,0.16-3.02-0.38c-0.12-0.06-0.24-0.13-0.35-0.21c-0.11-0.19-0.25-0.37-0.41-0.53c-0.07-0.12-0.17-0.24-0.28-0.33c0.19,0,0.349-0.031,0.48-0.069c0.14-0.07,0.26-0.19,0.31-0.33c0.11-0.27,0-0.7-0.35-1.17C8.93,17.85,8.34,17.32,7.48,16.79c-0.33-0.21-0.58-0.43-0.77-0.67c-0.19-0.23-0.32-0.469-0.399-0.72C6.15,14.86,6.17,14.31,6.3,13.75c0.151-0.66,0.45-1.3,0.74-1.85c0.2-0.35,0.39-0.66,0.55-0.91c0.099-0.07,0.03,0.12-0.39,0.91l-0.03,0.06c-0.401,0.75-1.151,2.5-0.12,3.86c0.04-0.99,0.26-1.971,0.65-2.881C7.83,12.64,8,12.29,8.179,11.9c0.59-1.25,1.311-2.87,1.381-4.23l0.289,0.2c0.221,0.14,0.391,0.34,0.6,0.47c0.21,0.2,0.48,0.33,0.89,0.33l0.11,0.01c0.41,0,0.739-0.13,1.01-0.269c0.29-0.13,0.521-0.33,0.74-0.401h0.01c0.47-0.13,0.84-0.399,1.06-0.699c0.36,1.42,1.211,3.48,1.75,4.479l0.061,0.11c0.26,0.48,0.67,1.31,0.93,2.34c0.051,0.18,0.09,0.37,0.13,0.57c0.15-0.011,0.33,0.02,0.52,0.06c0.08-0.21,0.13-0.42,0.16-0.63c0.19-1.391-0.69-2.75-1.19-3.26l-0.08-0.07c-0.22-0.2-0.23-0.34-0.12-0.34l0.2,0.189c0.56,0.58,1.21,1.51,1.46,2.57c0.08,0.29,0.12,0.6,0.12,0.91c0,0.25-0.03,0.51-0.09,0.76l0.2,0.07c1.05,0.529,1.429,0.93,1.25,1.529v-0.039h-0.2c0.149-0.471-0.181-0.83-1.08-1.221c-0.92-0.4-1.66-0.34-1.79,0.46l-0.02,0.14L16.27,16c-0.43,0.27-0.67,0.67-0.8,1.19c-0.13,0.53-0.17,1.15-0.21,1.871c-0.02,0.329-0.17,0.84-0.32,1.35C14.33,20.84,13.64,21.17,12.9,21.33L12.9,21.33z"></path><path fill="#DEDEDE" d="M9.561,7.67c-0.07,1.36-0.791,2.98-1.381,4.23C8,12.29,7.83,12.64,7.7,12.939c-0.39,0.91-0.611,1.891-0.65,2.881c-1.031-1.36-0.28-3.11,0.12-3.86L7.2,11.9c0.368-0.692,0.467-0.923,0.419-0.923c-0.007,0-0.017,0.005-0.029,0.013c-0.16,0.25-0.35,0.56-0.55,0.91c-0.29,0.55-0.59,1.19-0.74,1.85c-0.13,0.56-0.149,1.11,0.011,1.65c0.079,0.25,0.209,0.489,0.399,0.72c0.19,0.24,0.441,0.46,0.77,0.67c0.859,0.53,1.449,1.06,1.8,1.521c0.35,0.47,0.46,0.9,0.35,1.17c-0.05,0.14-0.17,0.26-0.31,0.33c-0.131,0.039-0.29,0.069-0.48,0.069c0.11,0.09,0.21,0.21,0.28,0.33c0.16,0.16,0.3,0.34,0.41,0.53c0.11,0.08,0.23,0.15,0.35,0.21c0.638,0.352,1.306,0.504,1.967,0.504c0.051,0,0.102-0.001,0.153-0.003V8.599c-0.165,0.049-0.348,0.08-0.55,0.08l-0.11-0.01c-0.41,0-0.68-0.13-0.89-0.33c-0.21-0.13-0.38-0.33-0.6-0.47L9.561,7.67L9.561,7.67z"></path><path fill="#F9C105" d="M14.22,6.3v0.14c-0.081-0.14-0.23-0.269-0.489-0.4c-0.541-0.2-0.771-0.271-1.07-0.469c-0.48-0.34-0.891-0.4-1.221-0.4c-0.18,0-0.34,0.03-0.48,0.06c-0.4,0.14-0.67,0.4-0.84,0.609h-0.01C10.08,5.87,10.04,5.9,9.94,5.969C9.83,6.03,9.67,6.17,9.45,6.31c-0.2,0.129-0.271,0.329-0.2,0.6c0.07,0.19,0.29,0.46,0.7,0.71c0.25,0.13,0.42,0.33,0.62,0.469c0.099,0.07,0.21,0.13,0.33,0.191c0.14,0.06,0.289,0.08,0.449,0.069c0.431,0.03,0.74-0.13,1.02-0.27c0.281-0.13,0.51-0.33,0.79-0.46c0.55-0.2,0.95-0.53,1.07-0.851C14.29,6.62,14.29,6.45,14.22,6.3L14.22,6.3z M11.689,5.64l0.021-0.05h0.271l0.149,0.141L11.99,5.79l-0.141-0.059l-0.16-0.07V5.64L11.689,5.64z M10.83,5.59h0.26l0.03,0.05V5.66h0.01l-0.17,0.07L10.82,5.8L10.68,5.731L10.83,5.59L10.83,5.59z M13.48,6.78c-0.19,0.13-0.471,0.33-0.7,0.47c-0.44,0.2-0.96,0.53-1.511,0.53c-0.539,0-0.979-0.271-1.289-0.47C9.82,7.18,9.7,7.05,9.6,6.98c-0.16-0.131-0.14-0.33-0.069-0.33c0.109,0.01,0.13,0.13,0.2,0.199C9.83,6.91,9.95,7.05,10.09,7.18c0.3,0.2,0.691,0.471,1.18,0.471c0.49,0,1.07-0.271,1.42-0.471c0.191-0.13,0.451-0.33,0.651-0.47c0.16-0.13,0.151-0.26,0.29-0.26C13.76,6.46,13.66,6.58,13.48,6.78L13.48,6.78z"></path><path fill="#D9A804" d="M10.82,5.8L10.68,5.731l0.15-0.141h0.26l0.03,0.05V5.66h0.01l-0.17,0.07L10.82,5.8L10.82,5.8z M11.439,5.17c-0.18,0-0.34,0.03-0.48,0.06c-0.4,0.14-0.67,0.4-0.84,0.609h-0.01C10.08,5.87,10.04,5.9,9.94,5.969C9.83,6.03,9.67,6.17,9.45,6.31c-0.2,0.129-0.271,0.329-0.2,0.6c0.07,0.19,0.29,0.46,0.7,0.71c0.25,0.13,0.42,0.33,0.62,0.469c0.099,0.07,0.21,0.13,0.33,0.191c0.116,0.05,0.24,0.072,0.37,0.072c0.026,0,0.053-0.001,0.079-0.003c0.036,0.003,0.071,0.004,0.105,0.004c0.206,0,0.384-0.044,0.545-0.104V7.618c-0.234,0.094-0.479,0.163-0.73,0.163c-0.539,0-0.979-0.271-1.289-0.47C9.82,7.18,9.7,7.05,9.6,6.98c-0.16-0.131-0.14-0.33-0.069-0.33c0.109,0.01,0.13,0.13,0.2,0.199C9.83,6.91,9.95,7.05,10.09,7.18c0.3,0.2,0.691,0.471,1.18,0.471c0.234,0,0.49-0.062,0.73-0.149V5.786L11.99,5.79l-0.141-0.059l-0.16-0.07V5.64l0.021-0.05h0.271L12,5.608V5.245C11.793,5.185,11.606,5.17,11.439,5.17L11.439,5.17z"></path></svg>
     )
}

export function NotFoundSVG() {
     return (
          <svg
               xmlns="http://www.w3.org/2000/svg"
               fill="none"
               viewBox="0 0 24 24"
               strokeWidth="1.5"
               stroke="currentColor"
               className="w-5 h-5 rtl:rotate-180"
          >
               <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
               />
          </svg>
     )
}

const GithubIconSVG: React.FC<IconProps> = (props) => {
     return (
          <svg
               {...props}
               xmlns="http://www.w3.org/2000/svg"
               width="24"
               height="24"
               viewBox="0 0 24 24"
               fill="none"
               stroke="currentColor"
               strokeWidth="2"
               strokeLinecap="round"
               strokeLinejoin="round"
          >
               <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
               <path d="M9 18c-4.51 2-5-2-7-2" />
          </svg>
     )
}

const InstagramIconSVG: React.FC<IconProps> = (props) => {
     return (
          <svg
               {...props}
               xmlns="http://www.w3.org/2000/svg"
               width="24"
               height="24"
               viewBox="0 0 24 24"
               fill="none"
               stroke="currentColor"
               strokeWidth="2"
               strokeLinecap="round"
               strokeLinejoin="round"
          >
               <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
               <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
               <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>
     )
}

const TwitterIconSVG: React.FC<IconProps> = (props) => {
     return (
          <svg
               {...props}
               xmlns="http://www.w3.org/2000/svg"
               width="26"
               height="26"
               viewBox="0 0 50 50"
               fill="none"
               stroke="currentColor"
               strokeWidth="2"
               strokeLinecap="round"
               strokeLinejoin="round"
               x="0px" y="0px"
          >
               <path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z"></path>
          </svg>
     )
}

export const footerSocialHandles = [
     {
          icon: <TwitterIconSVG className="h-5 w-5" />,
          url: 'https://x.com/remotikal/',
          label: "Twitter"
     },
     {
          icon: <InstagramIconSVG className="h-5 w-5" />,
          url: 'https://www.instagram.com/pi.remotikal/',
          label: "Instagram"
     },
     {
          icon: <GithubIconSVG className="h-5 w-5" />,
          url: 'https://github.com/aayushsharma-io/',
          label: "Github"
     },
]