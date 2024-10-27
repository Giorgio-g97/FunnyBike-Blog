import createPost from "@/actions/actions";
import React from "react";

const Form = () => {
  return (
    <div>
      <form
        action={createPost}
        className="flex flex-col max-w-[400px] gap-3 mx-auto"
      >
        <input
          name="title"
          className="p-1 h-10 border rounded-lg"
          type="text"
          placeholder="Inserisci un titolo.."
        />
        <textarea
          name="body"
          cols={30}
          rows={10}
          placeholder="Inserisci corpo del post"
          className="px-3 py-2 border rounded-lg"
        />
        <button className="bg-primary text-white p-1 rounded-lg">
          Crea Post
        </button>
      </form>
    </div>
  );
};

export default Form;
