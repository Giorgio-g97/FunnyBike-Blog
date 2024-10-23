import createPost from "@/actions/actions";

export default async function CreatePost(){

    return (
        <main className="text-center pt-32 px-10 flex flex-col gap-5">
            <h1 className="text-5xl font-bold">Crea un Post</h1>
        <form
        action={createPost}
        className="flex flex-col max-w-[400px] gap-3 mx-auto">
            <input name="title" className="p-1 h-10 border rounded-lg" type="text" placeholder="Inserisci un titolo.." />
            <textarea 
                name="body"
                cols={30}
                rows={10}
                placeholder="Inserisci corpo del post"
                className="px-3 py-2 border rounded-lg"    
            />
            <button className="bg-primary text-white p-1 rounded-lg">Crea Post</button>
        </form>
        </main>
    )
}