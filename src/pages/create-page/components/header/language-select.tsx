import { useEffect, useState } from "react";
import { 
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem
} from "../../../../components/select";
import { languages } from "../../../../i18n/languages";
import { useTranslation } from "react-i18next";

export function LanguageSelect() {
  const { i18n } = useTranslation()
  const [language, setLanguage] = useState('pt')

  useEffect(() => {
    const browserLanguage = navigator.language
    const loaded = browserLanguage.slice(0, 2).toLowerCase()

    const found = languages.find(l => l.code === loaded)

    if (!found) {
      setLanguage('en')
      return
    }

    setLanguage(loaded)
  }, [])

  function handleChangeLanguage(l: string) {
    setLanguage(l)
    i18n.changeLanguage(l)
  }

  return (
    <Select value={language} onValueChange={(value) => handleChangeLanguage(value)}>
      <SelectTrigger className="w-fit">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {languages.map((l) => {
          return (
            <SelectItem 
              key={l.code}
              value={l.code}
            >
              <div className="flex items-center gap-2">
                <img src={`/flags/${l.code}.svg`} className="size-6" />
                {l.label}
              </div>
            </SelectItem>
          )
        })}
      </SelectContent>
    </Select>
  )
}