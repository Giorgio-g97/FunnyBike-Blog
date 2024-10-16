"use client"
import { ThumbsUp } from "lucide-react";
import { useState } from "react";

export default function LikeButton(){

    const [like, setLike] = useState(0);

    return (
        <div className="flex gap-5 items-center">
            <button onClick={()=> setLike(like + 1 )} className="my-3 flex gap-3 items-center justify-center bg-primary p-2 rounded-xl text-white shadow-xl"><ThumbsUp /></button>
            <div className="border w-5 h-5 p-4 rounded-lg flex items-center justify-center">
            {like}
            </div>
        </div>
    )
}