"use client";
import { useState } from "react";
import { navLinks } from "@/constants/nav";
import Link from "next/link";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed left-8 right-8 top-8 z-10 mx-auto flex flex-col items-center justify-center rounded-2xl bg-dark-2 p-3 md:p-5 px-12 text-primary opacity-90 md:left-0 md:right-0 md:w-fit md:flex-row ">
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        onClick={() => setIsOpen(!isOpen)} //  Event handler for a click event that toggles the value of isOpen.
        className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-primary ring-primary hover:text-cta focus:outline-none focus:ring-2 focus:ring-cta  dark:focus:ring-gray-600 md:hidden"
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="h-5 w-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      {navLinks.map((link, key) => (
        <Link
          key={key}
          href={link.path}
          className="hidden px-4 py-2 hover:text-cta md:block"
        >
          {link.title}
        </Link>
      ))}

      {isOpen && (
        <div className="z-10 mt-3 flex w-full flex-col bg-dark-2 px-3 py-4 text-center text-base font-semibold md:hidden">
          {navLinks.map((data) => (
            <Link
              href={data.path}
              onClick={() => setIsOpen(false)}
              key={data.title}
              className="block py-2 pl-3 pr-4 hover:text-cta"
            >
              {data.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
