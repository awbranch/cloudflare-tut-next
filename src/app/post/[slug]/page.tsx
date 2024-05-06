import { groq } from 'next-sanity';
import { sanityClient } from '@/utils/sanity';
import { Post } from '@/types/Post';

export const dynamicParams = false;

export async function generateStaticParams() {
  const posts = await sanityClient.fetch<Post[]>(`*[_type == "post"]`)
  return posts
    .filter(p => p?.slug?.current)
    .map(p => ({ slug: p?.slug?.current }))
}


type Props = {
  params: { slug: string };
};
export default async function Posts({ params }: Props) {
  const { slug } = params;
  const post = await sanityClient.fetch<Post>(`*[_type == "post" && slug.current == $slug][0]`, { slug })

  return (
    <main className="p-10">
      {
        !post && <h1 className="text-xl mb-2">Post Not Found</h1>
      }
      {
        post && <h1 className="text-xl mb-2">{post.title}</h1>

      }

    </main>
  );
}
