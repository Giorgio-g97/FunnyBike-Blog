import LikeButton from "@/components/LikeButton";
import prisma from "@/lib/db";
import { notFound } from "next/navigation";

export default async function PostId({
  params,
}: {
  params: { postId: string };
}) {
  // Prendo il  parametro che ho dichiarato, in questo caso "[postId]"
  const post = await prisma.post.findUnique({
    where: {
      id: parseInt(params.postId),
    },
  });

  if (!post) {
    notFound();
  }

  return (
    <main className="text-center py-10 px-10 flex flex-col gap-8 items-center">
      <h1 className="text-5xl font-bold">{post.title}</h1>
      <p className="text-xl max-w-[750px] mx-auto">{post.body}</p>

      <LikeButton />
    </main>
  );
}
