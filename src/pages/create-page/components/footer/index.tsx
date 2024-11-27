import React from "react";
import { cn } from "../../../../utils/cn";
import GithubIcon from "./github-icon";
import { Link } from "../../../../components/link";

const github = "https://github.com/eric-figueira"

export function Footer({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <footer {...props}
      className={cn(
        "text-[16px] flex items-center gap-2 py-8 px-10 border-t border-slate-500", 
        className
      )}
    >
      <span className="font-normal text-gray-700">Built by</span>
      <Link href={github}>
        <div className="flex items-center gap-[6px]">
          <GithubIcon className="size-5" />
          <span className="font-medium text-gray-800">eric-figueira</span>
        </div>
      </Link>
    </footer>
  )
}