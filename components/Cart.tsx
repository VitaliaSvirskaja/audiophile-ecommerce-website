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
    <div className="flex max-w-lg flex-col gap-6 rounded-lg">
      <div className="flex flex-col gap-8">
        <div className="flex justify-between">
          <p className="h6">cart ({totalAmount})</p>
          <button
            className="body-font underline opacity-50 hover:text-sepia active:text-fuchsia"
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
                className="flex items-center justify-between gap-10"
              >
                <div className="flex items-center gap-4">
                  <Image
                    src={`/${item.slug}`}
                    alt=""
                    width={100}
                    height={100}
                    className="m-auto hidden rounded-lg lg:block"
                  />

                  <div className="flex flex-col">
                    <div className="body-font font-bold">{item.name}</div>
                    <div className="body-font opacity-50">
                      {currencyFormatter.format(item.price)}
                    </div>
                  </div>
                </div>
                <div className="flex gap-4">
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
