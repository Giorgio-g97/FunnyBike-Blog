import {withAuth} from "@kinde-oss/kinde-auth-nextjs/middleware";
import { NextRequest } from "next/server";

export default function middleware(req: NextRequest) {
  return withAuth(req);//Controlla se ha token di accesso
}
export const config = {
  matcher: ["/create-post"] // Determina quali routes deve proteggere
};