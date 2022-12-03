import Image from "next/image";
import heroBanner from "../assets/home/desktop/image-hero.jpg";
import { Button } from "./Button";

export const Herosection = () => (
  <div className="bg-almost-black px-6 sm:px-10">
    <div className="relative m-auto max-w-screen-xl overflow-hidden border-t border-gray-400/20">
      <Image src={heroBanner} alt="" fill className="z-0 object-cover" />
      <div className="flex flex-col items-start gap-10 pt-32 pb-40">
        <div className="flex max-w-md flex-col gap-6 text-white">
          <p className="overline-font opacity-50">New product</p>
          <p className="h1 z-10 antialiased">XX99 Mark II Headphones</p>
          <p className="body-font opacity-75">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
        </div>
        <Button variant="primary" className="z-10">
          SEE PRODUCT
        </Button>
      </div>
    </div>
  </div>
);
