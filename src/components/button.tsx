import * as React from "react";
import { cn } from "../utils/cn";

const Button = React.forwardRef<HTMLButtonElement, React.ComponentProps<'button'>>(
  ({ children, className, ...props }, ref) => {
    return (
      <button
        className={cn(
          "rounded-md bg-slate-800 hover:bg-slate-900 transition text-slate-100 font-normal text-sm sm:text-md flex justify-center items-center h-10 px-4 py-2 disabled:opacity-80 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-gray-300",
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    )
  }
)

export { Button }
