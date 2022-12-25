import Image from "next/image";
import { Product } from "../model/Product";
import { AddToCart } from "./AddToCart";
import { currencyFormatter } from "../utils/currencyFormatter";
import { useCartContext } from "../context/CartContext";

interface Props {
  product: Product | undefined;
}

export const ProductDetailHero = ({ product }: Props) => {
  const { updateCart } = useCartContext();

  function handleAddToCart(amount: number) {
    if (product === undefined) {
      return;
    }
    updateCart(amount, product.slug, product.price);
  }

  return (
    <div className="m-auto my-8 flex w-full max-w-screen-xl gap-8 max-sm:flex-col sm:gap-16 lg:gap-32">
      <div className="flex w-full items-center rounded-lg bg-middle-grey">
        <Image
          src={`/${product?.image.desktop}`}
          alt=""
          width={327}
          height={327}
          className="m-auto hidden rounded-lg lg:block"
        />
        <Image
          src={`/${product?.image.tablet}`}
          alt=""
          width={327}
          height={327}
          className="m-auto hidden rounded-lg sm:max-lg:block"
        />
        <Image
          src={`/${product?.image.mobile}`}
          alt=""
          width={327}
          height={327}
          className="m-auto rounded-lg sm:hidden"
        />
      </div>
      <div className="flex flex-col justify-center gap-6 sm:gap-4">
        {product?.new && (
          <div className="overline-font text-sepia">new product</div>
        )}

        <div className="flex flex-col gap-6 sm:gap-8">
          <div className="h4 lg:h2 tracking-wider">{product?.name}</div>
          <div className="body-font opacity-50">{product?.description}</div>
          <div className="h6">
            {currencyFormatter.format(product?.price || 0)}
          </div>
        </div>
        <AddToCart onAddToCart={handleAddToCart} />
      </div>
    </div>
  );
};
