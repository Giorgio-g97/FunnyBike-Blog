import prisma from "@/lib/db";
import Link from "next/link";

// Definisco il singolo Post
type Post = {
  id: number;
  title: string;
  body: string;
};

export default async function PostList() {
  await new Promise((res) => setTimeout(res, 1000));
  const posts = await prisma.post.findMany(); //Con prisma definisco il tipo di ogni dato dalla config dello schema (in prisma/schema.prisma)

  return (
    <ul className="my-10">
      {posts.map((post) => (
        <li className="my-10" key={post.id}>
          <Link href={`/posts/${post.id}`} className="text-xl font-bold ">
            {post.title}
          </Link>
          <hr className="border-red-500 max-w-60 mx-auto" />
        </li>
      ))}
    </ul>
  );
}
