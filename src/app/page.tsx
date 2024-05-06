import { groq } from 'next-sanity';
import { Post } from '@/types/Post';
import { sanityClient } from '@/utils/sanity';

export default async function Home() {

  const posts = await sanityClient.fetch<Post[]>(`*[_type == "post"]`)

  return (
    <main className="p-10">
      <h1 className="text-xl mb-2">Blog Posts</h1>
      <ul className="list-disc pl-4">
        {
          posts.map((post) => (
            <li key={post?.slug?.current}>
              {post.title} - {post.publishedAt}
            </li>
          ))
        }
      </ul>
    </main>
  );
}
