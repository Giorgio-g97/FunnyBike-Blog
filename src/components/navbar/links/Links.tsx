"use client";
import React, { useState } from "react";
import style from "./links.module.css";
import Navlink from "./navLink/NavLink";

const links = [
  {
    title: "Homepage",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];

const isLogged = true;
const isAdmin = true;

const Links = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={style.container}>
      <div className={style.links}>
        {links.map((link) => (
          <Navlink key={link.title} item={link} />
        ))}
        {isLogged ? (
          <>
            {isAdmin && <Navlink item={{ title: "Admin", path: "/admin" }} />}
            <button className={style.logout}>Logout</button>
          </>
        ) : (
          <Navlink item={{ title: "Login", path: "/login" }} />
        )}
      </div>
      <button
        className={style.menuBtn}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        Menu
      </button>
      {isOpen && (
        <div className={style.mobileLinks}>
          {links.map((l) => (
            <Navlink item={l} key={l.title} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
