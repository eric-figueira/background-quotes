import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const words = [
  "guides",
  "inspire",
  "challenges",
  "motivates",
  "empowers",
  "moves",
]

export function Slogan() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [])

  return (
    <div className="flex flex-col items-center font-extrabold text-[52px] leading-[4rem]">
      <span>Create the background that</span>
      <div className="flex gap-3">
        <div>
          <motion.div
            key={index}
            initial={{ 
              opacity: "0%",
              y: "50%" 
            }}
            animate={{ 
              opacity: "100%",
              y: "0%" 
            }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.6 }}
            style={{ position: "relative" }}
          >
            <span className="text-blue-700">{words[index]}</span>
          </motion.div>
        </div>
        <span>you.</span>
      </div>
    </div>
  )
}