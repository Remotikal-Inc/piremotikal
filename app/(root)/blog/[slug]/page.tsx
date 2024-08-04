import { fullBlog } from "@/lib/interface";
import { client, urlFor } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 30; // revalidate at most 30 seconds

async function getData(slug: string) {
     const query = `
    *[_type == "blog" && slug.current == '${slug}'] {
        "currentSlug": slug.current,
        title,
        content,
        titleImage,
        publishDate,
        authorName,
        authorPost,
        tags[]->{
            name
        }
    }[0]`;

     const data = await client.fetch(query);
     return data;
}

export default async function BlogArticle({
     params,
}: {
     params: { slug: string };
}) {
     const data: fullBlog = await getData(params.slug);

     const PortableTextComponent = {
          types: {
               image: ({ value }: { value: any }) => (
                    <Image
                         src={urlFor(value).url()}
                         alt="Image"
                         className="rounded-lg mt-8 border mx-auto"
                         width={800}
                         height={800}
                    />
               ),
          },
     };

     return (
          <div className="mt-8 mb-24 max-w-4xl mx-auto">
               <h1>
                    <span className="block text-base text-center text-primary font-semibold tracking-wide uppercase">
                         {data?.publishDate}
                    </span>
                    <span className="mt-2 block text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl">
                         {data?.title}
                    </span>
                    <div className="mt-3 text-center">
                         {data.tags && data.tags.map((tag: any, index: any) => (
                              <span key={index} className="inline-block bg-neutral-200 dark:bg-gray-700 text-sm text-gray-900 dark:text-neutral-300 px-2 py-1 rounded line-clamp-3 mr-2">
                                   <Link href={`/tag/${tag.name}`}>
                                        #{tag.name}
                                   </Link>
                              </span>
                         ))}
                    </div>
               </h1>

               <Image
                    src={urlFor(data?.titleImage).url()}
                    width={800}
                    height={800}
                    alt="Title Image"
                    priority
                    className="rounded-lg mt-8 border w-full mx-auto"
               />

               <hr className="mt-8" />

               <div className="w-full mt-8 mx-auto prose-blue prose-lg dark:prose-invert prose-li:marker:text-primary prose-a:text-primary">
                    <PortableText
                         value={data.content}
                         components={PortableTextComponent}
                    />
               </div>

               <hr className="mt-10" />

               <div className="dark:text-neutral-400 max-w-sm ml-auto mt-10 prose prose-blue prose-lg dark:prose-invert prose-li:marker:text-primary prose-a:text-primary text-right">
                    ~ Written by <span className="dark:text-neutral-200 text-neutral-900 font-semibold">{data.authorName}
                    <br/>
                    ({data.authorPost})</span>
               </div>
          </div>
     );
}