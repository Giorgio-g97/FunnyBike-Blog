import Image from "next/image";
import Link from "next/link";

const navLinks = [
    {
        name: "Chi siamo",
        path: "/about"
    },
    {
        name: "Blog",
        path: "/blog"
    }
]

export default function Navbar(){
    return(
        
            <nav className="flex justify-between px-10 border-b shadow text-center items-center">
                <Link href="/">
                <Image 
                src="/logo.png"
                width={100}
                height={100}
                alt="logo-funny-bike"
                />
                </Link>
                <ul className="flex gap-5 text-primary">
                    {navLinks.map(link => (
                        <li key={link.name}>
                            <Link href={link.path}>{link.name}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        
    )
}