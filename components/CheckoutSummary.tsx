import Image from "next/image";
import { currencyFormatter } from "../utils/currencyFormatter";
import { Delete } from "../public/assets/cart/Delete";
import { Button } from "./Button";
import { useCartContext } from "../context/CartContext";

export const CheckoutSummary = () => {
  const { items, totalPrice, VAT, removeItem } = useCartContext();

  return (
    <div className="flex h-fit flex-col gap-8 rounded-lg bg-white p-8">
      <div className="h6">summary</div>
      <div className="flex flex-col gap-6">
        {items.map((item) => {
          return (
            <li
              key={item.slug}
              className="flex items-center justify-between gap-10 sm:gap-12 lg:gap-28"
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
              <div className="flex gap-2 max-sm:items-end">
                <div className="sub-title flex items-center gap-5">
                  <div>x{item.quantity}</div>
                </div>
                <button onClick={() => removeItem(item.slug)}>
                  <Delete />
                </button>
              </div>
            </li>
          );
        })}
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between">
            <div className="body-font uppercase opacity-50">total</div>
            <div className="h6 font-bold tracking-normal">
              {currencyFormatter.format(totalPrice)}
            </div>
          </div>
          <div className="flex justify-between">
            <div className="body-font uppercase opacity-50">shipping</div>
            <div className="h6 font-bold tracking-normal">
              {currencyFormatter.format(totalPrice > 0 ? 50 : 0)}
            </div>
          </div>
          <div className="flex justify-between">
            <div className="body-font uppercase opacity-50">vat (included)</div>
            <div className="h6 font-bold tracking-normal">
              {currencyFormatter.format(VAT)}
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="body-font uppercase opacity-50">grand total</div>
          <div className="h6 font-bold tracking-normal text-sepia">
            {currencyFormatter.format(totalPrice > 0 ? totalPrice + 50 : 0)}
          </div>
        </div>
      </div>
      <Button className="w-full">continue & pay</Button>
    </div>
  );
};
