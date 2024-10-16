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

export default async function Posts(){

    const res = await fetch("https://dummyjson.com/posts?limit=10")
    const posts: ObjArrPosts = await res.json()

    return (
        <main className="text-center my-20">
            <h1 className="text-5xl font-bold">Lista dei post:</h1>
            <ul className="my-10">
                {posts.posts.map(post => (
                    <li className="my-10" key={post.id}><Link href={`/posts/${post.id}`} className="text-xl font-bold ">{post.title}</Link>
                    <hr className="border-red-500 max-w-60 mx-auto"/>
                    </li>
                ))}
            </ul>
        </main>
    )
}