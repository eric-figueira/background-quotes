import React from "react";
import { cn } from "../utils/cn";

const Link = React.forwardRef<HTMLAnchorElement, React.ComponentProps<'a'>>(
  ({ href = "/", rel = "noreferrer noopener", target = "_blank", children, className, ...props }, ref) => {
    return (
      <a
        href={href}
        ref={ref}
        className={cn(
          "no-underline text-inherit h-fit w-fit",
          className
        )}
        target={target}
        rel={rel}
        {...props}
      >
        {children}
      </a>
    )
  }
)

export { Link }
