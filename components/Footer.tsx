import Image from "next/image";
import logo from "../assets/logo.png";
import { Twitter } from "../assets/shared/desktop/Twitter";
import Link from "next/link";
import { NavLink } from "./NavLink";
import { Facebook } from "../assets/shared/desktop/Facebook";
import { Instagram } from "../assets/shared/desktop/Instagram";

export const Footer = () => {
  return (
    <div className="absolute bottom-0 flex w-full flex-col items-center bg-almost-black px-6 pb-9 text-white sm:px-10 sm:pb-12">
      <div className="flex w-full max-w-screen-xl flex-col">
        <div className="w-24 border-t-4 border-sepia max-sm:m-auto" />
        <div className="flex items-center justify-between gap-12 pt-14 pb-12 max-lg:flex-col sm:items-start sm:gap-8 sm:pb-8 lg:pt-20">
          <Link href="/" className="focus-ring p-2" title="Navigate to home">
            <Image src={logo} alt="" width={143} height={25} />
          </Link>
          <div className="flex items-center gap-4 max-sm:flex-col sm:gap-8">
            <NavLink
              text="Home"
              href="/"
              className="hover:text-sepia active:text-fuchsia"
            />
            <NavLink
              text="Headphones"
              href="/category/headphones"
              className="hover:text-sepia active:text-fuchsia"
            />
            <NavLink
              text="Speakers"
              href="/category/speakers"
              className="hover:text-sepia active:text-fuchsia"
            />
            <NavLink
              text="Earphones"
              href="/category/earphones"
              className="hover:text-sepia active:text-fuchsia"
            />
          </div>
        </div>

        <div className="flex flex-col gap-12 max-lg:flex-col sm:gap-20">
          <p className="body-font text-center opacity-50 sm:text-start lg:w-[540px]">
            Audiophile is an all in one stop to fulfill your audio needs.
            We&apos;re a small team of music lovers and sound specialists who
            are devoted to helping you get the most out of personal audio. Come
            and visit our demo facility - we&apos;re open 7 days a week.
          </p>

          <div className="flex justify-between max-md:items-center max-md:gap-12 max-sm:flex-col">
            <p className="body-font opacity-50 max-lg:text-center">
              Copyright 2021. All Rights Reserved
            </p>
            <div className="flex items-center gap-4">
              <Link href="https://de-de.facebook.com/">
                <Facebook />
              </Link>
              <Link href="https://twitter.com/?lang=de">
                <Twitter />
              </Link>
              <Link href="https://www.instagram.com/">
                <Instagram />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
