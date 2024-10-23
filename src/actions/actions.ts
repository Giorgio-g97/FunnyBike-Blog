"use server";

/**
 * SERVER ACTIONS
 * Questa funzione fa in automatico il fetch all'url da 
 * dove stai facendo richiesta, emette in automatico il
 * metodo 
 */
export default async function createPost(formData: FormData) {
    const title = formData.get("title") as string;
    const body = formData.get("body") as string;

    console.log("Titolo: ", title);
    console.log("Corpo del post: ", body);

}