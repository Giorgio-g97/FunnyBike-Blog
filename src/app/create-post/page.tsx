import Form from "@/components/Form";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

export default async function CreatePost() {
  return (
    <main className="text-center pt-32 px-10 flex flex-col gap-5">
      <h1 className="text-5xl font-bold">Crea un Post</h1>

      <Form />
      <LogoutLink>Logout</LogoutLink>
    </main>
  );
}
