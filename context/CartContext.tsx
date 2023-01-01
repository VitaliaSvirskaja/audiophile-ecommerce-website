import React, {
  createContext,
  MutableRefObject,
  PropsWithChildren,
  useContext,
  useRef,
  useState,
} from "react";

export interface Item {
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
  VAT: number;
  cartPanelRef: MutableRefObject<HTMLButtonElement | null> | undefined;
}
const cartContext = createContext<CartContextInterface>({
  items: [],
  updateCart: () => undefined,
  removeAll: () => undefined,
  removeItem: () => undefined,
  totalAmount: 0,
  totalPrice: 0,
  VAT: 0,
  cartPanelRef: undefined,
});

export function CartContextProvider({ children }: PropsWithChildren) {
  const cartPanelRef = useRef<HTMLButtonElement | null>(null);
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
  const VAT = totalPrice * 0.2;

  function removeItem(slug: string) {
    const updatedCartItems = cartItems.filter((cartItem) => {
      return cartItem.slug !== slug;
    });
    setCartItems(updatedCartItems);
  }

  function openCart() {
    let isCartOpen = false;
    cartPanelRef.current?.click();
    isCartOpen = true;
    setTimeout(() => {
      if (isCartOpen) {
        cartPanelRef.current?.click();
        isCartOpen = false;
      }
    }, 3000);
    if (cartPanelRef.current !== null) {
      cartPanelRef.current.onblur = () => {
        isCartOpen = false;
      };
    }
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
    openCart();
  }

  return (
    <cartContext.Provider
      value={{
        cartPanelRef: cartPanelRef,
        items: cartItems,
        updateCart: updateCart,
        removeAll: removeAll,
        removeItem: removeItem,
        totalAmount: totalAmount,
        totalPrice: totalPrice,
        VAT: VAT,
      }}
    >
      {children}
    </cartContext.Provider>
  );
}

export function useCartContext() {
  return useContext(cartContext);
}
