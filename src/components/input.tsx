import React from "react";
import { cn } from "../utils/cn";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<'input'>>(
  ({ className, type, placeholder = "", ...props }, ref) => {
    return (
      <input 
        ref={ref}
        type={type}
        placeholder={placeholder}
        className={cn(
          "h-10 w-full rounded-md px-3 py-2 border border-slate-300 placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-80",
          className
        )}
        {...props}
      />
    )
  }
)
export { Input }