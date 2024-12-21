import React from "react";
import { cn } from "../../../utils/cn";
import { LanguageSelect } from "../../../components/language-select";
import { useTranslation } from "react-i18next";

export function Header({ className, ...props }: React.ComponentProps<'div'>) {
  const { t } = useTranslation()

  return (
    <header {...props}
      className={cn(
        "flex justify-between items-center gap-2 py-5 md:py-7 px-8 md:px-10 border-b border-slate-500", 
        className
      )}
    >
      <h1 className="font-semibold text-gray-900 text-2xl">{t("createHeaderText")}</h1>
      
      <LanguageSelect />
    </header>
  )
}