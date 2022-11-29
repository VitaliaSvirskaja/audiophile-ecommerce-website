import Image from "next/image";
import logo from "../assets/logo.png";
import cart from "../assets/shared/desktop/icon-cart.svg";
import hamburgerMenu from "../assets/shared/tablet/icon-hamburger.svg";
import Link from "next/link";
import { useReducer } from "react";
import { DialogComponent } from "./DialogComponent";
import { headerReducer } from "../utils/headerReducer";

export const Header = () => {
  const [{ isMenuOpen, isCartOpen }, dispatch] = useReducer(headerReducer, {
    isMenuOpen: false,
    isCartOpen: false,
  });

  return (
    <>
      <div className="bg-almost-black px-6 sm:px-10">
        <div className="m-auto flex h-20 w-full max-w-screen-xl items-center justify-between gap-10 text-white sm:h-24">
          <button
            className="md:hidden"
            onClick={() => dispatch({ type: "openMenu" })}
          >
            <Image src={hamburgerMenu} alt="" />
          </button>

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

          <button onClick={() => dispatch({ type: "openCart" })}>
            <Image src={cart} alt="" width={23} height={20} />
          </button>
        </div>
      </div>
      <DialogComponent
        open={isMenuOpen}
        onClose={() => dispatch({ type: "close" })}
        className="w-full rounded-b-md md:hidden"
      >
        <p>Category</p>
      </DialogComponent>
      <DialogComponent
        open={isCartOpen}
        onClose={() => dispatch({ type: "close" })}
        className="my-8 w-fit rounded-md"
      >
        <p>Cart</p>
      </DialogComponent>
    </>
  );
};
