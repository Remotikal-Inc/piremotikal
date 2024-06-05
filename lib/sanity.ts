import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
     apiVersion: "2024-06-03",
     dataset: "production",
     projectId: "ez5n192a",
     useCdn: false,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
     return builder.image(source);
}