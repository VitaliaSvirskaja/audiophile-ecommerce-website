import { Button } from "./Button";
import { useState } from "react";

interface Props {
  onAddToCart: (counter: number) => void;
}
export const AddToCart = ({ onAddToCart }: Props) => {
  const [counter, setCounter] = useState(1);

  return (
    <div className="flex gap-4">
      <div className="sub-title flex items-center gap-5 bg-middle-grey py-4 px-6">
        <button
          className="opacity-25 hover:text-sepia hover:opacity-100 active:text-fuchsia"
          onClick={() => {
            if (counter <= 1) {
              return;
            }
            setCounter(counter - 1);
          }}
        >
          -
        </button>
        <div>{counter}</div>
        <button
          className="opacity-25 hover:text-sepia hover:opacity-100 active:text-fuchsia"
          onClick={() => setCounter(counter + 1)}
        >
          +
        </button>
      </div>
      <Button
        className="m-0"
        aria-label="addToCart"
        onClick={() => {
          return onAddToCart(counter);
        }}
      >
        Add to cart
      </Button>
    </div>
  );
};
