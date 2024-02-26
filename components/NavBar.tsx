import Image from "next/image";
import Link from "next/link";
import React from "react";
const NavbarLinks = [
  { label: "About", href: "#about" },
  { label: "Collaboration", href: "#collaboration" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
const NavBar = () => {
  return (
    <nav className="flex items-center justify-between p-5">
      <Link href="/">
        <Image src="/logo-black.png" width={50} height={50} alt="Logo"></Image>
      </Link>
      <ul className="space-x-7">
        {NavbarLinks.map((link) => (
          <Link
            className="font-semibold text-zinc-500 hover:text-zinc-800"
            key={link.label}
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
