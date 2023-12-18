import {navLinks} from '@/constants/nav'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className="mx-24 mb-4">
    <hr className="border-dark-2" />
    <div className="mt-4 grid grid-cols-2 px-4">
      <div className=" text-light-1 text-left font-extralight"> Dipesh Ranjan &bull; © 2023 All Rights Reserved</div>
      <div className="text-right text-light-1 flex flex-row gap-4 justify-end">
{navLinks.map((link, index) => (
  <Link
    key={index}
    href={link.path}
    className="mx-2 hover:text-secondary font-extralight "
  >
    {link.title}
  </Link>
))}
      </div>
    </div>
    </div>
  )
}

export default Footer