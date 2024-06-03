import { client, urlFor } from "../../lib/sanity";
import { Card, CardContent } from "../../../../components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { blogCard } from "../../lib/interface";
import { Button } from "../../../../components/ui/button";

export const revalidate = 30; // revalidate at most 30 seconds

async function getData(tags: string) {
     const query = `
  *[_type == 'blog'] | order(_createdAt desc) {
    title,
      smallDescription,
      "currentSlug": slug.current,
      titleImage,
      tags[]->{
        name
      }
  }`;

     const data = await client.fetch(query);

     return data;
}

export const dynamic = "force-dynamic";

export default async function tagsPage({
     params,
}: {
     params: { tags: string };
}) {
     const data: blogCard[] = await getData(params.tags);

     return (
          <div className="my-24 mx-auto">
               <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                         Our Blogs for #{params.tags}
                    </h2>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-5">
                    {data.filter(post => post.tags && post.tags.some(tag => tag.name === params.tags)).length > 0 ? (
                         data
                              .filter(post => post.tags && post.tags.some(tag => tag.name === params.tags))
                              .map((post, idx) => (
                                   <Card key={idx} className="dark:bg-neutral-900">
                                        <Image
                                             src={urlFor(post.titleImage).url()}
                                             alt="image"
                                             width={500}
                                             height={500}
                                             className="rounded-t-lg h-[200px] w-full object-cover"
                                        />
                                        <CardContent className="mt-5">
                                             <h3 className="text-lg line-clamp-2 font-bold text-gray-900 dark:text-gray-100">
                                                  {post.title}
                                             </h3>
                                             <p className="line-clamp-3 text-sm mt-2 text-gray-600 dark:text-gray-300">
                                                  {post.smallDescription}
                                             </p>
                                             <div className="mt-3">
                                                  {post.tags && post.tags.map((tag, index) => (
                                                       <span
                                                            key={index}
                                                            className="inline-block bg-gray-200 dark:bg-gray-700 text-sm text-gray-600 dark:text-gray-300 px-2 py-1 rounded line-clamp-3 mr-2">
                                                            <Link href={`/tag/${tag.name}`}>
                                                                 <span className="dark:text-gray-100">#{tag.name}</span>
                                                            </Link>
                                                       </span>
                                                  ))}
                                             </div>
                                             <Button asChild className="w-full mt-3">
                                                  <Link href={`/blog/${post.currentSlug}`}>Read More</Link>
                                             </Button>
                                        </CardContent>
                                   </Card>
                              ))
                    ) : (
                         <p className="text-lg font-semibold text-gray-900 dark:text-slate-300">
                              No blogs found on #{params.tags}
                         </p>
                    )}
               </div>
          </div>
     );
}