import { useState } from "react";
import { 
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem
} from "../../../../components/select";

export function LanguageSelect() {
  const [language, setLanguage] = useState('ptbr')

  return (
    <Select value={language} onValueChange={(value) => setLanguage(value)}>
      <SelectTrigger className="w-fit">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="ptbr">Portuguese</SelectItem>
        <SelectItem value="en">English</SelectItem>
        <SelectItem value="es">Spanish</SelectItem>
        <SelectItem value="fr">French</SelectItem>
        <SelectItem value="it">Italian</SelectItem>
      </SelectContent>
    </Select>
  )
}