import Image from "next/image";
import Link from "next/link";
import React from "react";
import ThemeToggle from "./ThemeToggle";
const NavbarLinks = [
  { label: "About", href: "#about" },
  { label: "Collaboration", href: "#collaboration" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
const NavBar = () => {
  return (
    <nav className="flex fixed items-center justify-between w-full p-5 px-24">
      <Link href="/">
        <Image
          src="/test.svg"
          className="text-white"
          width={50}
          style={{ fill: "#ffffff" }}
          height={50}
          alt="Logo"
        ></Image>
      </Link>
      <ul className="space-x-7 flex items-center">
        {NavbarLinks.map((link) => (
          <Link
            className="font-semibold dark:text-lightText text-zinc-500 hover:text-zinc-800"
            key={link.label}
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <ThemeToggle></ThemeToggle>
    </nav>
  );
};

export default NavBar;
