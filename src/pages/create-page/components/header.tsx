import React from "react";
import { cn } from "../../../utils/cn";

export function Header({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <header {...props}
      className={cn(
        "flex justify-between items-center gap-2 py-8 px-10 border-b border-slate-500", 
        className
      )}
    >
      <h1 className="font-semibold text-gray-900 text-2xl">Create</h1>
      <span className="font-semibold">PT-BR</span>
    </header>
  )
}