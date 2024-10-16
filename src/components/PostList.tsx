import Link from "next/link";

// Definisco il singolo Post
type Post = {
    id: number;
    title: string;
    body: string;
}

// Definisco l'oggetto all'interno dell'array di oggetti
type ObjArrPosts = {
    posts: Post[]
}

export default async function PostList(){

    await new Promise(res => setTimeout(res, 1000))
    const res = await fetch("https://dummyjson.com/posts?limit=10")
    const posts: ObjArrPosts = await res.json()

    return (
        <ul className="my-10">
            {posts.posts.map(post => (
                <li className="my-10" key={post.id}><Link href={`/posts/${post.id}`} className="text-xl font-bold ">{post.title}</Link>
                <hr className="border-red-500 max-w-60 mx-auto"/>
                </li>
            ))}
        </ul>
    )
}