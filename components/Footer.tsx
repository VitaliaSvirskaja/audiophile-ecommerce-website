import Image from "next/image";
import logo from "../assets/logo.png";
import facebook from "../assets/shared/desktop/icon-facebook.svg";
import twitter from "../assets/shared/desktop/icon-twitter.svg";
import instagram from "../assets/shared/desktop/icon-instagram.svg";

export const Footer = () => {
  return (
    <div className="flex flex-col bg-almost-black text-white px-40 pt-20 pb-12 gap-14">
      <div className=" flex-col flex items-center gap-10">
        <div className="flex justify-between w-full max-w-screen-xl">
          <Image
            src={logo}
            alt=""
            width={143}
            height={25}
            className="cursor-pointer"
          />
          <div className="flex gap-9">
            <button className="sub-title tracking-[2px]">Home</button>
            <button className="sub-title tracking-[2px]">Headphones</button>
            <button className="sub-title tracking-[2px]">Speakers</button>
            <button className="sub-title tracking-[2px]">Earphones</button>
          </div>
        </div>

        <div className="flex justify-between w-full max-w-screen-xl">
          <p className="w-[540px] body-font">
            Audiophile is an all in one stop to fulfill your audio needs.
            We&apos;re a small team of music lovers and sound specialists who
            are devoted to helping you get the most out of personal audio. Come
            and visit our demo facility - we’re open 7 days a week.
          </p>
          <div className="flex gap-4">
            <button>
              <Image src={facebook} alt="" />
            </button>
            <button>
              <Image src={twitter} alt="" />
            </button>
            <button>
              <Image src={instagram} alt="" />
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <p className="body-font w-full max-w-screen-xl">
          Copyright 2021. All Rights Reserved
        </p>
      </div>
    </div>
  );
};
