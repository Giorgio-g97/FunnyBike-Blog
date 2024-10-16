
import LikeButton from "@/components/LikeButton";


export default async function PostId({params}: {params: {postId: string}}){
// Prendo il  parametro che ho dichiarato, in questo caso "[postId]"
    const res = await fetch(`https://dummyjson.com/posts/${params.postId}`)
    const post = await res.json();

   

    return (
        <main className="text-center py-10 px-10 flex flex-col gap-8 items-center">
            <h1 className="text-5xl font-bold">{post.title}</h1> 
            <p className="text-xl max-w-[750px] mx-auto">{post.body}</p>

            <LikeButton />
        </main>
    )
}