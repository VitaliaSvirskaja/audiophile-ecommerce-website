import { Button } from "./Button";
import { useCartContext } from "../context/CartContext";
import { ItemSummary } from "./ItemSummary";
import { Price } from "./Price";

interface Props {
  onPurchase: () => void;
}

export const CheckoutSummary = ({ onPurchase }: Props) => {
  const { items, totalPrice, VAT } = useCartContext();

  return (
    <div className="flex h-fit flex-col gap-8 rounded-lg bg-white p-6 sm:p-8">
      <div className="h6">summary</div>
      <div className="flex flex-col gap-6">
        {items.map((item) => {
          return <ItemSummary item={item} key={item.slug} />;
        })}
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <Price price={totalPrice} priceType="Total" />
          <Price price={totalPrice > 0 ? 50 : 0} priceType="Shipping" />
          <Price price={VAT} priceType="VAT (included)" />
        </div>
        <Price
          price={totalPrice > 0 ? totalPrice + 50 : 0}
          priceType="grand total"
          className="text-sepia"
        />
      </div>
      <Button
        className="w-full disabled:bg-gray-300"
        onClick={onPurchase}
        disabled={totalPrice <= 0}
      >
        continue & pay
      </Button>
    </div>
  );
};
