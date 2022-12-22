import Link from "next/link";
import Image from "next/image";
import { Button } from "./Button";
import { Recommendations } from "../model/Product";

interface RecosProps {
  recommendations: Array<Recommendations> | undefined;
}

export const Recos = ({ recommendations }: RecosProps) => {
  return (
    <div className="m-auto flex max-w-screen-xl flex-col gap-10 sm:gap-14 lg:gap-16">
      <p className="h3 text-center">you may also like</p>
      <div className="flex gap-14 max-sm:flex-col sm:gap-3 lg:gap-8 ">
        {recommendations?.map((recommendation) => {
          return (
            <RecoCard
              name={recommendation.name}
              image={recommendation.image}
              key={recommendation.name}
            />
          );
        })}
      </div>
    </div>
  );
};

interface Props {
  name: string;
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
}

export const RecoCard = ({ name, image }: Props) => {
  return (
    <Link
      href="/"
      className="flex w-full flex-col items-center justify-center gap-8 max-lg:max-w-xs"
    >
      <div className="w-full rounded-lg bg-middle-grey">
        <Image
          src={`/${image.desktop}`}
          className="m-auto hidden lg:block"
          alt=""
          width={330}
          height={320}
        />
        <Image
          src={`/${image.tablet}`}
          className="m-auto hidden sm:max-lg:block"
          alt=""
          width={300}
          height={450}
        />
        <Image
          src={`/${image.mobile}`}
          className="m-auto sm:hidden"
          alt=""
          width={400}
          height={400}
        />
      </div>
      <div className="h4 flex flex-1 items-center justify-center text-center">
        <div>{name}</div>
      </div>
      <Button className="whitespace-nowrap">SEE PRODUCT</Button>
    </Link>
  );
};
