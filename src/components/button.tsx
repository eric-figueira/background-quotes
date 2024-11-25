import { ComponentProps, ReactNode } from "react";
import { cn } from "../utils/cn";

interface ButtonProps extends ComponentProps<'button'> {
  children: ReactNode
}

export function Button({
  children,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        "rounded-md bg-slate-800 hover:bg-slate-900 transition text-slate-100 font-normal text-sm sm:text-md w-full py-2 md:py-3",
        disabled && "bg-slate-600 hover:bg-slate-600 cursor-default text-slate-300"
      )}
    >
      {children}
    </button>
  )
}