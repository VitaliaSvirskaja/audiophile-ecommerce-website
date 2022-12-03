import Image from "next/image";
import logo from "../assets/logo.png";
import cart from "../assets/shared/desktop/icon-cart.svg";
import hamburgerMenu from "../assets/shared/tablet/icon-hamburger.svg";
import Link from "next/link";
import { Popover, Transition } from "@headlessui/react";

export const Header = () => (
  <div className="bg-almost-black px-6 sm:px-10">
    <div className="m-auto flex h-20 w-full max-w-screen-xl items-center justify-between gap-10 text-white sm:h-24">
      <Popover className="lg:hidden">
        <Popover.Button className="focus-ring p-2" title="menu">
          <Image src={hamburgerMenu} alt="" />
        </Popover.Button>
        <Transition
          className="absolute top-16 left-6 sm:top-20 sm:left-10"
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <Popover.Panel>
            <div className="w-[calc(100vw-48px)] w-full rounded bg-white p-5 text-black shadow-md sm:w-[calc(100vw-80px)]">
              Category
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>

          <Link href="/" className="sm:justify-self-start sm:max-md:flex-1">
            <Image src={logo} alt="" width={143} height={25} />
          </Link>

          <div className="hidden gap-9 md:flex">
            <button className="sub-title tracking-[2px]">
              <Link href="/">Home</Link>
            </button>
            <button className="sub-title tracking-[2px]">
              <Link href="/category/headphones">Headphones</Link>
            </button>
            <button className="sub-title tracking-[2px]">
              <Link href="/category/speakers">Speakers</Link>
            </button>
            <button className="sub-title tracking-[2px]">
              <Link href="/category/earphones">Earphones</Link>
            </button>
          </div>

      <Popover>
        <Popover.Button className="focus-ring p-2" aria-label="cart">
          <Image src={cart} alt="" width={23} height={20} />
        </Popover.Button>

        <Transition
          className="absolute top-16 right-6 sm:top-20 sm:right-10"
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <Popover.Panel>
            <div className="rounded bg-white p-5 text-black shadow-md">
              Cart
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  </div>
);

interface NavLinkProps {
  text: string;
  href: string;
}

const NavLink = ({ text, href }: NavLinkProps) => (
  <Link
    href={href}
    className="sub-title focus-ring rounded px-2 tracking-[2px]"
  >
    {text}
  </Link>
);
