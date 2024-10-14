import React from "react";
import Links from "./links/Links";
import style from "./navbar.module.css";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <div className={style.container}>
        <Link href="/" className={style.logo}>
          <Image src="/logo.png" width={80} height={80} alt="logo-funny-bike" />
        </Link>
        <Links />
      </div>
    </>
  );
};

export default Navbar;
