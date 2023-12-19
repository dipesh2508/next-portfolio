import { navLinks } from "@/constants/nav";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="mx-24 mb-4">
      <hr className="border-dark-2" />
      <div className="mt-4 grid grid-cols-1 px-4 gap-4 md:gap-0 md:grid-cols-2">
        <div className=" text-left font-extralight text-light-1">
          {" "}
          Dipesh Ranjan &bull; © 2023 All Rights Reserved
        </div>
        <div className="flex flex-col justify-end gap-4 text-center text-sm text-light-1  md:flex-row md:text-right md:text-base">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              className="mx-2 text-sm font-extralight hover:text-secondary md:text-base "
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
