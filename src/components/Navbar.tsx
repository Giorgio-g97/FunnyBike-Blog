"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
    {
        name: "Home",
        path: "/"
    },
    {
        name: "Chi siamo",
        path: "/about"
    },
    {
        name: "Blog",
        path: "/blog"
    },
    {
        name: "Posts",
        path: "/posts"
    },
    {
        name: "Crea un Post",
        path: "/create-post"
    }
]

export default function Navbar(){

    const pathName = usePathname();

    return(
        
            <nav className="flex justify-between px-10 border-b shadow text-center items-center">
                <Link href="/">
                <Image 
                className="p-[2px] shadow-2xl rounded-full m-[5px]"
                src="/logo.png"
                width={90}
                height={90}
                alt="logo-funny-bike"
                />
                </Link>
                <ul className="flex gap-5">
                    {navLinks.map(link => (
                        <li key={link.name}>
                            <Link className={`${pathName === link.path ? "text-white rounded-xl bg-primary" : "text-primary"} "text-3xl p-3 "`} href={link.path}>{link.name}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        
    )
}