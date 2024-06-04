import { Card, CardContent } from "../../../components/ui/card";
import { client, urlFor } from "../lib/sanity";
import Image from "next/image";
import { Button } from "../../../components/ui/button";
import Link from "next/link";

export const revalidate = 30; // revalidate at most 30 seconds

async function getData() {
     const query = `
    {
      "tags": *[_type == 'tag'] {
        name
      },
      "posts": *[_type == 'blog'] | order(_createdAt desc) {
        title,
        smallDescription,
        "currentSlug": slug.current,
        titleImage,
        tags[]->{
          name
        }
      }
    }
  `;

     const data = await client.fetch(query);

     return data;
}

export default async function page() {
     const { tags, posts } = await getData();

     // console.log(posts);

     return (
          <section className="my-28 flex flex-col gap-8">
               <h1 className="text-3xl md:text-4xl lg:text-5xl font-normal text-neutral-900 dark:text-neutral-100">Remotikal Blog</h1>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {posts && posts.map((post: any, idx: any) => (
                         <Card key={idx}>
                              <Image
                                   src={urlFor(post.titleImage).url()}
                                   alt="image"
                                   width={500}
                                   height={500}
                                   className="rounded-t-lg h-[200px] w-full object-cover bg-transparent"
                              />

                              <CardContent className="pt-5 dark:bg-neutral-900 dark:border-neutral-900">
                                   <h3 className="text-lg line-clamp-2 font-bold">{post.title}</h3>
                                   <p className="line-clamp-3 text-sm mt-2 text-neutral-600 dark:text-neutral-300">
                                        {post.smallDescription}
                                   </p>
                                   <div className="mt-3">
                                        {post.tags && post.tags.map((tag: any, index: any) => (
                                             <span key={index} className="inline-block bg-neutral-200 dark:bg-neutral-700 text-sm text-neutral-600 dark:text-neutral-300 px-2 py-1 rounded line-clamp-3 mr-2">
                                                  <Link href={`/tag/${tag.name}`}>
                                                       #{tag.name}
                                                  </Link>
                                             </span>
                                        ))}
                                   </div>
                                   <Button asChild className="w-full mt-3">
                                        <Link href={`/blog/${post.currentSlug}`}>Read More</Link>
                                   </Button>
                              </CardContent>
                         </Card>
                    ))}
               </div>
          </section>
     );
}