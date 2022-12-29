import { currencyFormatter } from "../utils/currencyFormatter";
import React from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  price: number;
  priceType: string;
}
export const Price = ({
  price,
  priceType,
  className = "",
  ...divProps
}: Props) => {
  return (
    <div className="flex justify-between">
      <div className="body-font uppercase opacity-50">{priceType}</div>
      <div
        className={`h6 font-bold tracking-normal ${className}`}
        {...divProps}
      >
        {currencyFormatter.format(price)}
      </div>
    </div>
  );
};
