import { notFound } from 'next/navigation'
import { PortableText, groq } from 'next-sanity';
import { client } from '@/utils/sanity';
import { Post } from '@/types/Post';
import Link from 'next/link';
import ResponsiveImage from '@/app/components/ResponsiveImage';

export const dynamicParams = false;

export async function generateStaticParams() {
  const posts = await client.fetch<Post[]>(`*[_type == "post"]`)
  return posts
    .filter(p => p?.slug?.current)
    .map(p => ({ slug: p?.slug?.current }))
}


type Props = {
  params: { slug: string };
};

export default async function Posts({ params }: Props) {
  const { slug } = params;
  const post = await client.fetch<Post>(`*[_type == "post" && slug.current == $slug][0]`, { slug })

  if (!post) {
    notFound();
  }

  return (
    <main className="p-10">
      <Link href={"/"} className="text-sm">&lt; Home</Link>
      <h1 className="text-xl mb-2">{post.title}</h1>
      {
        post?.mainImage && <ResponsiveImage
          image={post.mainImage}
          sizes="600px"
          className="mb-4 max-w-[600px]" />
      }

      {
        post?.body &&
        <PortableText value={post.body} />

      }

    </main>
  );
}
