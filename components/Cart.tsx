import { useCartContext } from "../context/CartContext";
import { Button } from "./Button";
import Link from "next/link";
import { currencyFormatter } from "../utils/currencyFormatter";
import { ItemSummary } from "./ItemSummary";

export const Cart = () => {
  const { totalAmount, items, totalPrice, removeAll } = useCartContext();

  return (
    <div
      className="m-auto flex max-w-lg flex-col gap-6 rounded-lg"
      aria-label="cart"
    >
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
            return <ItemSummary item={item} key={item.slug} />;
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
