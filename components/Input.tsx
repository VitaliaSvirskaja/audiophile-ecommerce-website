import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  placeholder: string;
  type: string;
}

export const Input = ({ label, type, placeholder, className = "" }: Props) => {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label className="text-xs font-bold tracking-tight" htmlFor={label}>
        {label}
      </label>
      <input
        type={type}
        id={label}
        placeholder={placeholder}
        className="rounded-lg border border-middle-grey py-5 px-6 text-sm font-semibold tracking-tight hover:border-sepia"
      />
    </div>
  );
};
