import { createContext, PropsWithChildren, useContext, useState } from "react";

interface Item {
  slug: string;
  price: number;
  quantity: number;
}
interface CartContextInterface {
  items: Array<Item>;
  updateCart: (amount: number, slug: string, price: number) => void;
}
const cartContext = createContext<CartContextInterface>({
  items: [],
  updateCart: () => undefined,
});

export function CartContextProvider({ children }: PropsWithChildren) {
  const [cartItems, setCartItems] = useState<Array<Item>>([]);

  function updateCart(amount: number, slug: string, price: number) {
    const newItem = { slug: slug, quantity: amount, price: price };
    const foundItem = cartItems.find((cartItem) => {
      return cartItem.slug === slug;
    });
    if (foundItem) {
      const updatedItems = cartItems.map((cartItem) => {
        return {
          slug: cartItem.slug,
          price: cartItem.price,
          quantity: cartItem.quantity + foundItem.quantity,
        };
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
      }}
    >
      {children}
    </cartContext.Provider>
  );
}

export function useCartContext() {
  return useContext(cartContext);
}
