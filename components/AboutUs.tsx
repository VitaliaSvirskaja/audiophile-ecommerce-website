import Image from "next/image";
import aboutUsImageDesktop from "../assets/shared/desktop/image-best-gear.jpg";
import aboutUsImageTablet from "../assets/shared/tablet/image-best-gear.jpg";
import aboutUsImageMobile from "../assets/shared/mobile/image-best-gear.jpg";

export const AboutUs = () => {
  return (
    <div className="m-auto flex h-fit w-full max-w-screen-xl items-center gap-10 max-lg:flex-col md:gap-8 lg:h-[588px] lg:items-center lg:justify-between lg:gap-32">
      <div className="lg:hidden">
        <Image
          src={aboutUsImageTablet}
          alt=""
          className="hidden rounded-lg sm:max-lg:block "
        />
        <Image
          src={aboutUsImageMobile}
          alt=""
          className="rounded-lg sm:hidden"
        />
      </div>
      <div className="flex max-w-[445px] flex-col gap-8">
        <p className="h4 sm:h2 max-lg:text-center">
          Bringing you the <span className="text-sepia">best</span> audio gear
        </p>
        <p className="body-font opacity-50 max-lg:text-center">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <div>
        <Image
          src={aboutUsImageDesktop}
          alt=""
          className="hidden flex-1 rounded-lg lg:block"
        />
      </div>
    </div>
  );
};
