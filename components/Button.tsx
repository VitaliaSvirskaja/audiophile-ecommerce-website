import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import arrowRight from "../public/assets/shared/desktop/icon-arrow-right.svg";
import Image from "next/image";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary";
}

export const Button = ({
  variant = "primary",
  className = "",
  children,
  ...buttonProps
}: PropsWithChildren<Props>) => (
  <button
    className={`${
      variant === "primary"
        ? "bg-sepia text-white hover:bg-fuchsia active:bg-sepia"
        : variant === "secondary"
        ? "border border-black bg-none text-black hover:bg-black hover:text-white active:bg-white active:text-black"
        : "bg-none text-black opacity-50 hover:text-sepia active:text-fuchsia"
    } sub-title m-auto flex items-center gap-3 py-4 px-8 leading-tight transition-colors ${className}`}
    {...buttonProps}
  >
    {children}
    {variant === "tertiary" && <Image src={arrowRight} alt="" />}
  </button>
);
