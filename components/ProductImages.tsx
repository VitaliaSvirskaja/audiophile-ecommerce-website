import { ProductGallery } from "../model/Product";
import Image from "next/image";

interface Props {
  galleryImages: ProductGallery | undefined;
}

export const ProductImages = ({ galleryImages }: Props) => {
  return (
    <div className="m-auto grid h-[900px] w-full max-w-screen-xl grid-cols-1 grid-rows-4 gap-5 sm:h-[500px] sm:grid-cols-5 sm:grid-rows-2 lg:gap-8">
      <div className="relative sm:col-span-2 sm:row-span-1">
        <Image
          src={`/${galleryImages?.first.desktop}`}
          alt=""
          className="hidden rounded-lg object-cover lg:block"
          fill
        />
        <Image
          src={`/${galleryImages?.first.tablet}`}
          alt=""
          className="hidden rounded-lg object-cover sm:max-lg:block"
          fill
        />
        <Image
          src={`/${galleryImages?.first.mobile}`}
          alt=""
          className="rounded-lg object-cover sm:hidden"
          fill
        />
      </div>

      <div className="relative sm:col-span-2 sm:row-start-2">
        <Image
          src={`/${galleryImages?.second.desktop}`}
          alt=""
          className="hidden rounded-lg object-cover lg:block"
          fill
        />
        <Image
          src={`/${galleryImages?.second.tablet}`}
          alt=""
          className="hidden rounded-lg object-cover sm:max-lg:block"
          fill
        />
        <Image
          src={`/${galleryImages?.second.mobile}`}
          alt=""
          className="rounded-lg object-cover sm:hidden"
          fill
        />
      </div>

      <div className="relative row-span-2 row-start-3 sm:col-span-3 sm:col-start-3 sm:row-span-2">
        <Image
          src={`/${galleryImages?.third.desktop}`}
          alt=""
          className="hidden rounded-lg object-cover lg:block"
          fill
        />
        <Image
          src={`/${galleryImages?.third.tablet}`}
          alt=""
          className="hidden rounded-lg object-cover sm:max-lg:block"
          fill
        />
        <Image
          src={`/${galleryImages?.third.mobile}`}
          alt=""
          className="rounded-lg object-cover sm:hidden"
          fill
        />
      </div>
    </div>
  );
};
