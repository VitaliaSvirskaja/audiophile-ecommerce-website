import { Input } from "./Input";
import Image from "next/image";
import { useEffect, useState } from "react";
import cashIcon from "../public/assets/checkout/icon-cash-on-delivery.svg";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { Inputs } from "../pages/checkout";

interface Props {
  onSubmit: () => void;
  register: UseFormRegister<Inputs>;
  errors: FieldErrors<Inputs>;
}

export const CheckoutForm = ({ onSubmit, register, errors }: Props) => {
  const [paymentMethod, setPaymentMethod] = useState<"cash" | "e-money">(
    "e-money"
  );

  useEffect(() => {
    console.log("Error" + errors);
  }, [errors]);

  return (
    <form
      className="flex w-full flex-col gap-14 rounded-lg bg-white p-12"
      onSubmit={onSubmit}
    >
      <div className="h3">checkout</div>
      <div>
        <div className="sub-title text-sepia">billing details</div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4">
          <Input
            label="Name"
            placeholder="Alexei Ward"
            type="text"
            errorMessage={errors.name?.message}
            // className={errors.name && "border-2 border-error-red "}
            {...register("name", { required: "Name is required." })}
          />

          <Input
            label="Email Address"
            placeholder="alexei@mail.com"
            type="email"
            errorMessage={errors.email?.message}
            {...register("email", {
              required: "Email is required.",
              pattern: {
                value: /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
                message: "Wrong format",
              },
            })}
          />
          <Input
            label="Phone Number"
            placeholder="+1 202-555-0136"
            type="tel"
            errorMessage={errors.phone?.message}
            {...register("phone", { required: "Phone number is required." })}
          />
        </div>
      </div>
      <div>
        <div className="sub-title text-sepia">shipping info</div>
        <div className="grid grid-cols-2 grid-rows-3 gap-4">
          <Input
            label="Address"
            placeholder="1137 Williams Avenue"
            type="text"
            errorMessage={errors.address?.message}
            className="col-span-2"
            {...register("address", { required: "Address is required." })}
          />
          <Input
            label="ZIP Code"
            placeholder="10001"
            type="number"
            errorMessage={errors.zipCode?.message}
            {...register("zipCode", { required: "ZIP Code is required." })}
          />
          <Input
            label="City"
            placeholder="New York"
            type="text"
            errorMessage={errors.city?.message}
            {...register("city", { required: "City is required." })}
          />
          <Input
            label="Country"
            placeholder="United States"
            type="text"
            errorMessage={errors.country?.message}
            {...register("country", { required: "Country is required." })}
          />
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div className="sub-title text-sepia">payment details</div>
        <div className="grid grid-cols-2">
          <label className="text-xs font-bold tracking-tight">
            Payment Method
          </label>
          <div className="flex flex-col gap-2">
            <div className="col-start-2 flex gap-5 rounded-lg border border-middle-grey p-5 hover:border-sepia">
              <input
                type="radio"
                value="e-Money"
                id="e-Money"
                className="accent-sepia opacity-50 checked:opacity-100"
                onClick={() => setPaymentMethod("e-money")}
                {...register("payment", { required: true })}
              />
              <label
                htmlFor="e-Money"
                className="text-sm font-semibold tracking-tight"
              >
                e-Money
              </label>
            </div>
            <div className="col-start-2 flex gap-5 rounded-lg border border-middle-grey p-5 hover:border-sepia">
              <input
                type="radio"
                value="Cash on Delivery"
                id="Cash on Delivery"
                className="accent-sepia opacity-50 checked:opacity-100"
                onClick={() => setPaymentMethod("cash")}
                {...register("payment", { required: true })}
              />
              <label
                htmlFor="Cash on Delivery"
                className="text-sm font-semibold tracking-tight"
              >
                Cash on Delivery
              </label>
            </div>
          </div>
        </div>
        {paymentMethod === "cash" ? (
          <div className="flex gap-8">
            <Image src={cashIcon} alt="" className="col-span-1" />
            <div className="body-font col-start-2 opacity-50">
              The ‘Cash on Delivery’ option enables you to pay in cash when our
              delivery courier arrives at your residence. Just make sure your
              address is correct so that your order will not be cancelled.
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-2 grid-rows-1 gap-4">
            <div className="col-span-1">
              <Input
                label="e-Money Number"
                type="number"
                placeholder="238521993"
                errorMessage={errors.eMoneyNumber?.message}
                {...register("eMoneyNumber", {
                  required: "e-Money number is required.",
                })}
              />
            </div>
            <div className="col-start-2">
              <Input
                label="e-Money PIN"
                type="number"
                placeholder="6891"
                errorMessage={errors.eMoneyPIN?.message}
                {...register("eMoneyPIN", {
                  required: "e-Money PIN is required.",
                })}
              />
            </div>
          </div>
        )}
      </div>
    </form>
  );
};
