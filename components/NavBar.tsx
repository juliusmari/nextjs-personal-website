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
    <nav className="flex fixed items-center justify-between w-full p-5">
      <Link href="/">
        <Image src="/logo-black.png" width={50} height={50} alt="Logo"></Image>
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
        <ThemeToggle></ThemeToggle>
      </ul>
    </nav>
  );
};

export default NavBar;
