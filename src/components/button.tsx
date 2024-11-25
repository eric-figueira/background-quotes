import { ComponentProps, ReactNode } from "react";

interface ButtonProps extends ComponentProps<'button'> {
  children: ReactNode
}

export function Button({
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className="rounded-md bg-slate-800 hover:bg-slate-900 transition text-slate-100 font-normal text-sm sm:text-md w-full py-2 md:py-3"
    >
      {children}
    </button>
  )
}