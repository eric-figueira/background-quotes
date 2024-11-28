import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const words = {
  "guides": "text-blue-700",
  "motivates": "text-indigo-700",
  "inspires": "text-green-700",
  "challenges": "text-orange-700",
  "empowers": "text-red-700",
}

export function Slogan() {
  const [index, setIndex] = useState<number>(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % Object.keys(words).length);
    }, 3000);

    return () => clearInterval(interval);
  }, [])

  return (
    <div className="flex flex-col items-center px-4 text-center font-extrabold text-3xl sm:text-4xl lg:text-5xl lg:leading-[3.5rem] xl:text-[52px] xl:leading-[4rem]">
      <span>Create the background that</span>
      <div className="flex gap-3">
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
            <span className={Object.values(words)[index]}>{Object.keys(words)[index]}</span>
          </motion.div>
        </div>
        <span>you.</span>
      </div>
    </div>
  )
}