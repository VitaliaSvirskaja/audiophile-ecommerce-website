import Image from "next/image";
import { currencyFormatter } from "../utils/currencyFormatter";
import { Delete } from "../public/assets/cart/Delete";
import { Item, useCartContext } from "../context/CartContext";

interface Props {
  item: Item;
}

export const ItemSummary = ({ item }: Props) => {
  const { removeItem, updateCart } = useCartContext();

  return (
    <li
      key={item.slug}
      className="flex items-center justify-between gap-20 sm:gap-24 lg:gap-36"
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
};
