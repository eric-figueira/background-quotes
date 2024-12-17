import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"

const words = {
  "guides": "text-blue-700",
  "motivates": "text-indigo-700",
  "inspires": "text-green-700",
  "challenges": "text-orange-700",
  "empowers": "text-red-700",
}

export function Slogan() {
  const { t } = useTranslation()

  const [index, setIndex] = useState<number>(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % Object.keys(words).length);
    }, 3000);

    return () => clearInterval(interval);
  }, [])

  function transform(s: string) {
    const capital = s.slice(0, 1).toUpperCase() + s.slice(1, s.length).toLowerCase()
    const key = `indexSlogan${capital}`

    return key
  }

  return (
    <div className="flex flex-col items-center px-4 text-center font-extrabold text-3xl sm:text-4xl lg:text-5xl lg:leading-[3.5rem] xl:text-[52px] xl:leading-[4rem]">
      <span>{t("indexSloganInitial")}</span>
      <div className="flex gap-2">
        <div>
          <motion.div
            key={index}
            initial={{ 
              opacity: 0,
              scale: 0.8,
              y: "50%" 
            }}
            animate={{ 
              opacity: 1,
              scale: 1,
              y: "0%" 
            }}
            exit={{ 
              opacity: 0,
              scale: 0.8
            }}
            transition={{ 
              duration: 0.8,
              type: "spring",
              bounce: 0.45
            }}
            style={{ position: "relative" }}
          >
            <span className={Object.values(words)[index]}>
              {t(
                transform(Object.keys(words)[index])
              )}
            </span>
          </motion.div>
        </div>
        <span>{t("indexSloganLast")}</span>
      </div>
    </div>
  )
}