export default function CreatePost(){
    return (
        <main className="text-center pt-32 px-10 flex flex-col gap-5">
            <h1 className="text-5xl font-bold">Crea un Post</h1>
        <form >
            <input type="text" placeholder="Inserisci un titolo.." />
            <button className="border rounded-lg">Crea Post</button>
        </form>
        </main>
    )
}