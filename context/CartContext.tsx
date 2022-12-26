import { createContext, PropsWithChildren, useContext, useState } from "react";

interface Item {
  slug: string;
  name: string;
  price: number;
  quantity: number;
}
interface CartContextInterface {
  items: Array<Item>;
  updateCart: (
    amount: number,
    slug: string,
    price: number,
    name: string
  ) => void;
  removeAll: () => void;
  removeItem: (slug: string) => void;
  totalAmount: number;
  totalPrice: number;
}
const cartContext = createContext<CartContextInterface>({
  items: [],
  updateCart: () => undefined,
  totalAmount: 0,
  totalPrice: 0,
});

export function CartContextProvider({ children }: PropsWithChildren) {
  const [cartItems, setCartItems] = useState<Array<Item>>([]);
  const itemsAmountArray = cartItems.map((item) => item.quantity);
  const totalAmount = itemsAmountArray.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );
  const totalPriceArray = cartItems.map((item) => {
    return item.price * item.quantity;
  });
  const totalPrice = totalPriceArray.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );

  function removeAll() {
    setCartItems([]);
  }

  function removeItem(slug: string) {
    const updatedCartItems = cartItems.filter((cartItem) => {
      return cartItem.slug !== slug;
    });
    setCartItems(updatedCartItems);
  }

  function updateCart(
    amount: number,
    slug: string,
    price: number,
    name: string
  ) {
    const newItem = { slug: slug, quantity: amount, price: price, name: name };
    const foundItem = cartItems.find((cartItem) => cartItem.slug === slug);
    if (foundItem) {
      const updatedItems = cartItems.map((cartItem) => {
        if (cartItem.slug === foundItem.slug) {
          return {
            slug: cartItem.slug,
            price: cartItem.price,
            name: cartItem.name,
            quantity: cartItem.quantity + amount,
          };
        } else {
          return {
            slug: cartItem.slug,
            price: cartItem.price,
            name: cartItem.name,
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
        removeAll: removeAll,
        removeItem: removeItem,
        totalAmount: totalAmount,
        totalPrice: totalPrice,
      }}
    >
      {children}
    </cartContext.Provider>
  );
}

export function useCartContext() {
  return useContext(cartContext);
}
