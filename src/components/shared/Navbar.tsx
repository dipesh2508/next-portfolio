import { useState } from "react";
import { navLinks } from "@/constants/nav";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className="fixed left-0 right-0 px-12 top-8 z-10 flex mx-auto w-fit items-center justify-center rounded-2xl bg-dark-2 p-5 text-primary opacity-90 hover:text-cta">
      {navLinks.map((link, key) => (
        <Link key={key} href={link.path} className="px-4 py-2">
          {link.title}
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
