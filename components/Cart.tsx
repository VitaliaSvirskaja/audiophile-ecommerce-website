import { useCartContext } from "../context/CartContext";
import { Button } from "./Button";
import Link from "next/link";
import Image from "next/image";
import { currencyFormatter } from "../utils/currencyFormatter";
import { Delete } from "../public/assets/cart/Delete";

export const Cart = () => {
  const { totalAmount, items, updateCart, totalPrice, removeAll, removeItem } =
    useCartContext();

  return (
    <div className="m-auto flex max-w-lg flex-col gap-6 rounded-lg">
      <div className="flex flex-col gap-8">
        <div className="flex justify-between gap-20">
          <p className="h6 w-full whitespace-nowrap">cart ({totalAmount})</p>
          <button
            className="body-font w-full whitespace-nowrap underline opacity-50 hover:text-sepia active:text-fuchsia"
            onClick={removeAll}
          >
            Remove all
          </button>
        </div>
        <div className="flex flex-col gap-6">
          {items.map((item) => {
            return (
              <li
                key={item.slug}
                className="flex items-center justify-between gap-20 sm:gap-32 lg:gap-44"
              >
                <div className="flex items-center gap-4">
                  <Image
                    src={`/assets/cart/image-${item.slug}.jpg`}
                    alt=""
                    width={70}
                    height={70}
                    className="rounded-lg"
                  />

                  <div className="flex flex-col">
                    <div className="body-font font-bold">{item.name}</div>
                    <div className="body-font opacity-50">
                      {currencyFormatter.format(item.price)}
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 max-sm:flex-col max-sm:items-end">
                  <div className="sub-title flex items-center gap-5 bg-middle-grey py-2 px-4">
                    <button
                      className="opacity-25 hover:text-sepia hover:opacity-100 active:text-fuchsia"
                      onClick={() => {
                        if (item.quantity <= 1) {
                          return;
                        }
                        updateCart(-1, item.slug, item.price, item.name);
                      }}
                    >
                      -
                    </button>
                    <div>{item.quantity}</div>
                    <button
                      className="opacity-25 hover:text-sepia hover:opacity-100 active:text-fuchsia"
                      onClick={() => {
                        updateCart(1, item.slug, item.price, item.name);
                      }}
                    >
                      +
                    </button>
                  </div>
                  <button onClick={() => removeItem(item.slug)}>
                    <Delete />
                  </button>
                </div>
              </li>
            );
          })}
        </div>
        <div className="flex justify-between">
          <div className="body-font opacity-50">TOTAL</div>
          <div className="h6 tracking-normal">
            {currencyFormatter.format(totalPrice)}
          </div>
        </div>
      </div>
      <Link href="/checkout">
        <Button className="w-full">CHECKOUT</Button>
      </Link>
    </div>
  );
};
