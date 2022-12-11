import Image, { StaticImageData } from "next/image";
import { Button } from "./Button";
import headphonesDesktop from "../assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakersDesktop from "../assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphonesDesktop from "../assets/shared/desktop/image-category-thumbnail-earphones.png";
import Link from "next/link";

export const Categories = () => {
  return (
    <div className="my-10 px-6 sm:my-28 md:px-10 lg:my-32">
      <div className="m-auto flex max-w-screen-xl gap-4 max-sm:flex-col sm:gap-3 lg:items-end lg:justify-between lg:gap-7">
        <CategoryCard category="headphones" src={headphonesDesktop} />
        <CategoryCard category="speakers" src={speakersDesktop} />
        <CategoryCard category="earphones" src={earphonesDesktop} />
      </div>
    </div>
  );
};

interface Props {
  category: string;
  src: StaticImageData;
}

const CategoryCard = ({ category, src }: Props) => {
  return (
    <div className="flex h-52 w-full items-end lg:h-80">
      <div className="md:h-42 m-auto flex h-40 w-full flex-col items-center justify-end rounded-lg bg-middle-grey pb-3 max-lg:max-w-xs lg:h-48">
        <Link href={`/category/${category}`}>
          <Image
            src={src}
            alt=""
            height={200}
            className="relative top-4 hidden lg:block"
          />
          <Image
            src={src}
            alt=""
            height={140}
            className="relative top-3 lg:hidden"
          />
        </Link>
        <div className="sub-title lg:h6 text-sm text-black">{category}</div>
        <Button variant="tertiary" className="text-xs">
          SHOP
        </Button>
      </div>
    </div>
  );
};
