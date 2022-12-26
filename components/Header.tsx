import Image from "next/image";
import logo from "../public/assets/logo.png";
import cart from "../public/assets/shared/desktop/icon-cart.svg";
import hamburgerMenu from "../public/assets/shared/tablet/icon-hamburger.svg";
import Link from "next/link";
import { Popover, Transition } from "@headlessui/react";
import { NavLink } from "./NavLink";
import { Categories } from "./Categories";
import { useCartContext } from "../context/CartContext";
import { useEffect, useRef } from "react";

export const Header = () => {
  const openPanelRef = useRef<HTMLButtonElement | null>(null);
  const { totalAmount } = useCartContext();

  useEffect(() => {
    openPanelRef.current?.click();
  }, [totalAmount]);

  return (
    <div className="sticky top-0 z-20 w-full bg-almost-black px-6 sm:px-10">
      <div className="m-auto flex h-20 w-full max-w-screen-xl items-center justify-between gap-10 text-white sm:h-24">
        <Popover className="z-20 lg:hidden">
          <Popover.Button className="focus-ring p-2" title="menu">
            <Image src={hamburgerMenu} alt="" />
          </Popover.Button>
          <Transition
            className="absolute top-16 left-6 z-10 sm:top-20 sm:left-10"
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Popover.Panel>
              {({ close }) => {
                return (
                  <div className="flex w-[calc(100vw-50px)] items-center justify-center rounded bg-white px-6 pt-10 pb-4 text-black shadow-md sm:w-[calc(100vw-80px)] md:px-10">
                    <Categories onClick={close} />
                  </div>
                );
              }}
            </Popover.Panel>
          </Transition>
        </Popover>

        <Link
          href="/"
          className="focus-ring p-2 sm:justify-self-start sm:max-lg:flex-1"
          title="Navigate to home"
        >
          <Image src={logo} alt="" width={143} height={25} />
        </Link>

        <nav className="hidden gap-8 lg:flex">
          <NavLink text="Home" href="/" />
          <NavLink text="Headphones" href="/category/headphones" />
          <NavLink text="Speakers" href="/category/speakers" />
          <NavLink text="Earphones" href="/category/earphones" />
        </nav>
        {/* TODO: focus ring um cart symbol ändern*/}
        <Popover>
          <Popover.Button
            ref={openPanelRef}
            className="focus-ring indicator flex items-center p-2"
            aria-label="cart"
          >
            <Image src={cart} alt="" width={23} height={20} />
            {totalAmount > 0 && (
              <span className="indicator-item badge badge-secondary relative left-1 bottom-3 rounded-full bg-sepia px-1.5 text-sm font-semibold">
                {totalAmount}
              </span>
            )}
          </Popover.Button>
          <div className="relative max-w-screen-xl">
            <Transition
              className="absolute top-2 right-0 z-10 sm:top-4"
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
          </div>
        </Popover>
      </div>
    </div>
  );
};
