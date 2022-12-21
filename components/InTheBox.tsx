import { IncludedItems } from "../model/Product";

interface Props {
  includedItems: Array<IncludedItems> | undefined;
}

export const InTheBox = ({ includedItems }: Props) => {
  return (
    <div className="flex max-w-screen-xl gap-6 max-sm:flex-col sm:gap-40 lg:m-auto lg:flex-col lg:gap-8">
      <div className="h5">In the box</div>
      <div>
        <ul className="flex flex-col gap-2">
          {includedItems?.map((includedItem) => (
            <li key={includedItem.item} className="flex gap-6">
              <p className="body-font font-bold text-sepia">
                {includedItem.quantity} x
              </p>
              <p className="body-font opacity-50">{includedItem.item}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
