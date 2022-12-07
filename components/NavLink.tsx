import Link from "next/link";
import { LinkHTMLAttributes } from "react";

interface NavLinkProps extends LinkHTMLAttributes<HTMLLinkElement> {
  text: string;
  href: string;
}

export const NavLink = ({ text, href, className = "" }: NavLinkProps) => (
  <Link
    href={href}
    className={`sub-title focus-ring rounded px-2 tracking-[2px] ${className}`}
  >
    {text}
  </Link>
);
