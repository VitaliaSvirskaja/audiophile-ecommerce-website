import { ButtonHTMLAttributes, PropsWithChildren } from "react";

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
        ? "bg-white text-black hover:bg-black hover:text-white active:bg-white active:text-black"
        : "text-black-50 bg-white hover:text-sepia active:text-black"
    } sub-title py-4 px-8 leading-tight transition-colors ${className}`}
    {...buttonProps}
  >
    {children}
    {/*TODO implement icon feature*/}
    {variant === "tertiary" && "icon"}
  </button>
);
