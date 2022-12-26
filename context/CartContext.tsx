import { createContext, PropsWithChildren, useContext, useState } from "react";

interface Item {
  slug: string;
  price: number;
  quantity: number;
}
interface CartContextInterface {
  items: Array<Item>;
  updateCart: (amount: number, slug: string, price: number) => void;
  totalAmount: number;
}
const cartContext = createContext<CartContextInterface>({
  items: [],
  updateCart: () => undefined,
  totalAmount: 0,
});

export function CartContextProvider({ children }: PropsWithChildren) {
  const [cartItems, setCartItems] = useState<Array<Item>>([]);
  const itemsAmount = cartItems.map((item) => {
    return item.quantity;
  });
  const initialvalue = 0;
  const totalAmount = itemsAmount.reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
  }, initialvalue);

  function updateCart(amount: number, slug: string, price: number) {
    const newItem = { slug: slug, quantity: amount, price: price };
    const foundItem = cartItems.find((cartItem) => cartItem.slug === slug);
    if (foundItem) {
      const updatedItems = cartItems.map((cartItem) => {
        if (cartItem.slug === foundItem.slug) {
          return {
            slug: cartItem.slug,
            price: cartItem.price,
            quantity: cartItem.quantity + amount,
          };
        } else {
          return {
            slug: cartItem.slug,
            price: cartItem.price,
            quantity: cartItem.quantity,
          };
        }
      });
      setCartItems(updatedItems);
    } else {
      const newItems = [...cartItems, newItem];
      setCartItems(newItems);
    }
  }

  return (
    <cartContext.Provider
      value={{
        items: cartItems,
        updateCart: updateCart,
        totalAmount: totalAmount,
      }}
    >
      {children}
    </cartContext.Provider>
  );
}

export function useCartContext() {
  return useContext(cartContext);
}