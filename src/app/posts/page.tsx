import PostList from "@/components/PostList";
import { Suspense } from "react";
import Loading from "../loading";
import Form from "@/components/Form";

export default async function Posts() {
  return (
    <main className="text-center my-20">
      <h1 className="text-5xl font-bold">Lista dei post:</h1>

      <Suspense fallback={<Loading />}>
        <PostList />
      </Suspense>

      <Form />
    </main>
  );
}
