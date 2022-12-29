import { forwardRef, InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  errorMessage?: string;
}

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ label, errorMessage, className = "", ...inputProps }: Props, ref) => {
    return (
      <div className={`flex flex-col gap-2 ${className}`}>
        <div className="flex justify-between">
          {" "}
          <label className="text-xs font-bold tracking-tight" htmlFor={label}>
            {label}
          </label>
        </div>
        <input
          ref={ref}
          id={label}
          {...inputProps}
          className={`rounded-lg border border-middle-grey py-5 px-6 text-sm font-semibold tracking-tight hover:border-sepia focus:border-sepia focus:outline-none ${
            errorMessage && "border-2 border-error-red hover:border-error-red"
          }`}
        />
        <span className="pl-2 text-xs font-bold tracking-tight text-error-red">
          {errorMessage}
        </span>
      </div>
    );
  }
);

Input.displayName = "Input";
