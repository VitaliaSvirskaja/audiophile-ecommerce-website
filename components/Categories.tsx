import Image, { StaticImageData } from "next/image";
import { Button } from "./Button";
import headphonesDesktop from "../assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakersDesktop from "../assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphonesDesktop from "../assets/shared/desktop/image-category-thumbnail-earphones.png";
import Link from "next/link";

interface CategoryProps {
  onClick?: () => void;
}

export const Categories = ({ onClick }: CategoryProps) => {
  return (
    <div className="w-full">
      <div className="m-auto flex max-w-screen-xl gap-4 max-sm:flex-col sm:gap-3 lg:items-end lg:justify-between lg:gap-7">
        <CategoryCard
          category="headphones"
          src={headphonesDesktop}
          onClick={onClick}
        />
        <CategoryCard
          category="speakers"
          src={speakersDesktop}
          onClick={onClick}
        />
        <CategoryCard
          category="earphones"
          src={earphonesDesktop}
          onClick={onClick}
        />
      </div>
    </div>
  );
};

interface Props {
  category: string;
  src: StaticImageData;
  onClick?: () => void;
}

export const CategoryCard = ({ category, src, onClick }: Props) => {
  return (
    <div className="flex h-52 w-full items-end lg:h-80" onClick={onClick}>
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
          <div className="sub-title lg:h6 text-center text-sm text-black">
            {category}
          </div>
          <Button variant="tertiary" className="text-xs">
            SHOP
          </Button>
        </Link>
      </div>
    </div>
  );
};
