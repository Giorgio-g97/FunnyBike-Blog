"use server";

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

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

    // Metodo POST su Prisma
    await prisma.post.create({
        data: {
            title,
            body
        }
    })

    /**
     * Ri-renderizza la route "/posts" perché
     * NextJS di default recupera i dati salvati in cache
     * Nel momento in cui devo necessariamente aggiornare i valori
     * posso usare questa funzione
     */
    revalidatePath("/posts");
}