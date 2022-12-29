import { currencyFormatter } from "../utils/currencyFormatter";
import { Button } from "./Button";
import { useCartContext } from "../context/CartContext";
import { ItemSummary } from "./ItemSummary";

export const CheckoutSummary = () => {
  const { items, totalPrice, VAT } = useCartContext();

  return (
    <div className="flex h-fit flex-col gap-8 rounded-lg bg-white p-8">
      <div className="h6">summary</div>
      <div className="flex flex-col gap-6">
        {items.map((item) => {
          return <ItemSummary item={item} key={item.slug} />;
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
