import Image from "next/image";
import heroBanner from "../assets/home/desktop/image-hero.jpg";

export const Herosection = () => {
  return (
    <div className="h-[632px] relative bg-almost-black flex justify-between items-center gap-10 max-w-screen-xl w-full ">
      <Image src={heroBanner} alt="" fill className="z-0" />
      <div className="w-[398px] z-10">
        <div className="flex flex-col gap-6">
          <div className="overline-font text-white opacity-50">New product</div>
          <div className="h1 text-white">XX99 Mark II Headphones</div>
          <p className="body-font text-white w-96 opacity-75">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <button className="sub-title bg-sepia text-white h-12 w-40">
            See product
          </button>
        </div>
      </div>
    </div>
  );
};
