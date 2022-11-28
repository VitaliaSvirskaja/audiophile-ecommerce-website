import Image from "next/image";
import logo from "../assets/logo.png";
import cart from "../assets/shared/desktop/icon-cart.svg";

export const Header = () => (
  <div className="bg-almost-black">
    <div className="pt-8 text-white m-auto flex justify-between max-w-screen-xl w-full items-center border-b-gray-700 border-b pb-9">
      <button>
        <Image src={logo} alt="" width={143} height={25} />
      </button>
      <div className="flex gap-9">
        <button className="sub-title tracking-[2px]">Home</button>
        <button className="sub-title tracking-[2px]">Headphones</button>
        <button className="sub-title tracking-[2px]">Speakers</button>
        <button className="sub-title tracking-[2px]">Earphones</button>
      </div>
      <button>
        <Image src={cart} alt="" width={23} height={20} />
      </button>
    </div>
  </div>
);
