"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import style from "./navLink.module.css";

type TypeLink = {
  title: string;
  path: string;
};

const navLink = ({ item }: { item: TypeLink }) => {
  const pathName = usePathname();

  return (
    <Link
      className={`${style.container} ${pathName === item.path && style.active}`} //se il percorso è uguale al path name, attiva classe css
      href={item.path}
    >
      {item.title}
    </Link>
  );
};

export default navLink;
