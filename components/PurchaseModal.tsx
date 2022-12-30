import { Dialog } from "@headlessui/react";
import { Button } from "./Button";
import Image from "next/image";
import purchase from "/public/assets/checkout/icon-order-confirmation.svg";
import Link from "next/link";
import { useCartContext } from "../context/CartContext";
import { currencyFormatter } from "../utils/currencyFormatter";
import { useState } from "react";

interface Props {
  isOpen: boolean;
  close: () => void;
}
export const PurchaseModal = ({ isOpen, close }: Props) => {
  const { totalPrice, items } = useCartContext();
  const [showAllItems, setShowAllItems] = useState(false);
  return (
    <Dialog open={isOpen} onClose={close} className="relative z-50">
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      {/* Full-screen container to center the panel */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        {/* The actual dialog panel  */}
        <Dialog.Panel className="mx-auto  rounded bg-white">
          <div className="flex flex-col gap-8 rounded-lg bg-white p-6 sm:p-12">
            <div>
              <Image src={purchase} alt="" />
            </div>
            <div>
              <div className="h5 sm:h3 w-fit">Thank you</div>
              <div className="h5 sm:h3 w-fit">for your order</div>
            </div>
            <div className="body-font opacity-50">
              You will receive an email confirmation shortly.
            </div>
            <div className="flex max-sm:flex-col">
              <div className="flex w-full flex-col justify-center gap-4 bg-middle-grey p-6 max-sm:rounded-t-lg sm:rounded-l-lg">
                {items.map((item, index) => {
                  if (index === 0) {
                    return (
                      <li
                        key={item.slug}
                        className="flex items-center justify-between gap-20 sm:gap-24 lg:gap-36"
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
                            <div className="body-font font-bold">
                              {item.name}
                            </div>
                            <div className="body-font opacity-50">
                              {currencyFormatter.format(item.price)}
                            </div>
                          </div>
                        </div>
                        <div className="sub-title flex items-center gap-5 py-2 px-4 opacity-50">
                          <div>x{item.quantity}</div>
                        </div>
                      </li>
                    );
                  }
                })}
                {items.length - 1 > 0 && !showAllItems && (
                  <button
                    className="border-t-2 border-t-gray-300 pt-3 text-center text-sm font-semibold tracking-tight opacity-50"
                    onClick={() => setShowAllItems(true)}
                  >
                    and {items.length - 1} more item(s)
                  </button>
                )}

                {showAllItems &&
                  items.map((item, index) => {
                    if (index > 0) {
                      return (
                        <li
                          key={item.slug}
                          className="flex items-center justify-between gap-20 sm:gap-24 lg:gap-36"
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
                              <div className="body-font font-bold">
                                {item.name}
                              </div>
                              <div className="body-font opacity-50">
                                {currencyFormatter.format(item.price)}
                              </div>
                            </div>
                          </div>
                          <div className="sub-title flex items-center gap-5 py-2 px-4 opacity-50">
                            <div>x{item.quantity}</div>
                          </div>
                        </li>
                      );
                    }
                  })}
                {showAllItems && (
                  <button
                    className="border-t-2 border-t-gray-300 pt-3 text-center text-sm font-semibold tracking-tight opacity-50"
                    onClick={() => setShowAllItems(false)}
                  >
                    View less
                  </button>
                )}
              </div>
              <div className="flex w-full flex-col justify-center gap-2 bg-almost-black py-10 px-8 text-white max-sm:rounded-b-lg sm:rounded-r-lg">
                <div className="body-font uppercase opacity-50">
                  grand total
                </div>
                <div className="text-lg">
                  {currencyFormatter.format(totalPrice + 50)}
                </div>
              </div>
            </div>
            <Link href="/">
              <Button className="w-full">back to home</Button>
            </Link>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};
