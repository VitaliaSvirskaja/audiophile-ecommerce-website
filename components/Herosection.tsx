import Image from "next/image";
import heroBannerDesktop from "../public/assets/home/desktop/image-hero.jpg";
import heroBannerTablet from "../public/assets/home/tablet/image-header.jpg";
import heroBannerMobile from "../public/assets/home/mobile/image-header.jpg";
import { Button } from "./Button";
import Link from "next/link";

export const Herosection = () => (
  <div className="bg-almost-black px-6 sm:px-10">
    <div className="relative m-auto max-w-screen-xl overflow-hidden border-t border-gray-400/20">
      <Image
        src={heroBannerDesktop}
        alt=""
        fill
        priority
        // TODO: add sizes property https://nextjs.org/docs/api-reference/next/legacy/image#sizes
        className="z-0 hidden object-cover lg:block"
      />
      <Image
        src={heroBannerTablet}
        alt=""
        fill
        priority
        className="z-0 hidden object-contain sm:max-lg:block"
      />
      <Image
        src={heroBannerMobile}
        alt=""
        fill
        priority
        className="z-0 object-contain sm:hidden"
      />
      <div className="flex flex-col items-center gap-10 py-28 sm:pt-32 sm:pb-40 lg:items-start">
        <div className="flex max-w-md flex-col gap-6 text-white">
          <p className="overline-font text-center opacity-50 lg:text-start">
            New product
          </p>
          <p className="sm:h1 z-10 text-center text-[36px] font-bold uppercase leading-[40px] tracking-[1.3px] antialiased lg:text-start">
            XX99 Mark II Headphones
          </p>
          <p className="body-font text-center opacity-75 lg:text-start">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
        </div>
        <Link href="/product/xx99-mark-two-headphones" className="z-10">
          <Button variant="primary">SEE PRODUCT</Button>
        </Link>
      </div>
    </div>
  </div>
);
