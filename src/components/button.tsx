import * as React from "react";
import { cn } from "../utils/cn";

const Button = React.forwardRef<HTMLButtonElement, React.ComponentProps<'button'>>(
  ({ children, ...props }, ref) => {
    return (
      <button
        className={cn(
          "rounded-md bg-slate-800 hover:bg-slate-900 transition text-slate-100 font-normal text-sm sm:text-md w-full py-2 md:py-3 disabled:opacity-80 disabled:pointer-events-none",
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    )
  }
)

export {Button}
