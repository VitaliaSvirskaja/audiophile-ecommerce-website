import { Button } from "./Button";
import Image from "next/image";
import zx7SpeakerDesktop from "../public/assets/home/desktop/image-speaker-zx7.jpg";
import zx7SpeakerTablet from "../public/assets/home/tablet/image-speaker-zx7.jpg";
import zx7SpeakerMobile from "../public/assets/home/mobile/image-speaker-zx7.jpg";
import zx9SpeakerDesktop from "../public/assets/home/desktop/image-speaker-zx9.png";
import zx9SpeakerTablet from "../public/assets/home/tablet/image-speaker-zx9.png";
import zx9SpeakerMobile from "../public/assets/home/mobile/image-speaker-zx9.png";
import xy1EarphonesDesktop from "../public/assets/home/desktop/image-earphones-yx1.jpg";
import xy1EarphonesTablet from "../public/assets/home/tablet/image-earphones-yx1.jpg";
import xy1EarphonesMobile from "../public/assets/home/mobile/image-earphones-yx1.jpg";
import highlightBackground from "../public/assets/home/desktop/pattern-circles.svg";
import Link from "next/link";

export const Highlights = () => {
  return (
    <div className="px-6 sm:px-10">
      <div className="m-auto flex max-w-screen-xl flex-col items-center gap-6 sm:gap-8 lg:gap-12">
        <div className="relative h-[600px] w-full overflow-clip rounded-lg bg-sepia sm:h-[720px] lg:h-[560px]">
          <Image
            src={highlightBackground}
            alt=""
            className="overflow-hidden bg-auto object-top"
          />
          <div className="absolute bottom-6 flex w-full gap-16 max-lg:flex-col max-lg:items-center lg:-bottom-4 lg:justify-between lg:gap-12 lg:pl-32 lg:pr-24">
            <div>
              <Image
                src={zx9SpeakerDesktop}
                alt=""
                width={450}
                height={500}
                className="hidden lg:block"
              />
              <Image
                src={zx9SpeakerTablet}
                alt=""
                width={200}
                height={235}
                className="hidden sm:max-lg:block"
              />
              <Image
                src={zx9SpeakerMobile}
                alt=""
                width={170}
                height={205}
                className="sm:hidden"
              />
            </div>
            <div className="flex w-80 flex-col justify-center gap-10 p-6 text-white max-lg:items-center max-lg:text-center">
              <div className="flex flex-col gap-6">
                <p className="sm:h1 text-4xl font-bold leading-10 text-white">
                  ZX9 SPEAKER
                </p>
                <p className="body-font text-white">
                  Upgrade to premium speakers that are phenomenally built to
                  deliver truly remarkable sound.
                </p>
              </div>
              <Link href="/product/zx9-speaker">
                <Button variant="secondary" className="m-0 w-fit">
                  SEE PRODUCT
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="relative flex h-80 w-full">
          <Image
            src={zx7SpeakerDesktop}
            alt=""
            className="hidden rounded-lg lg:block"
            fill
          />
          <Image
            src={zx7SpeakerTablet}
            alt=""
            className="hidden rounded-lg sm:max-lg:block"
            fill
          />
          <Image
            src={zx7SpeakerMobile}
            alt=""
            className="rounded-lg sm:hidden"
            fill
          />
          <div className="z-10 ml-6 flex flex-col justify-center gap-8 sm:ml-16 lg:ml-24">
            <p className="h4">ZX7 SPEAKER</p>
            <Link href="/product/zx7-speaker">
              <Button variant="secondary" className="m-0 w-fit">
                SEE PRODUCT
              </Button>
            </Link>
          </div>
        </div>

        <div className="col-span-1 grid w-full gap-8 max-sm:grid-rows-2 sm:grid-cols-2 lg:justify-between">
          <div className="relative">
            <Image
              src={xy1EarphonesDesktop}
              alt=""
              className="hidden rounded-lg lg:block"
              fill
            />
            <Image
              src={xy1EarphonesTablet}
              alt=""
              className="hidden rounded-lg sm:max-lg:block"
              fill
            />
            <Image
              src={xy1EarphonesMobile}
              alt=""
              className="rounded-lg sm:hidden"
              fill
            />
          </div>
          <div className="flex flex-col justify-center gap-8 rounded-lg bg-middle-grey py-10 pl-6 sm:py-24 sm:pl-10 lg:py-28 lg:pl-24">
            <p className="h4">YX1 EARPHONES</p>
            <Link href="/product/yx1-earphones">
              <Button variant="secondary" className="m-0 w-fit">
                SEE PRODUCT
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
