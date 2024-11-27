import { ArrowRight, Loader2 } from "lucide-react";
import { Button } from "../../components/button";
import { Slogan } from "./components/slogan";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function LandingPage() {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)

  function handleClick() {
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
      
      navigate('/create')
    }, 3000)
  }

  return (
    <div className="h-screen flex justify-center items-center bg-grid-black/[0.05]">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)]" />

      <div className="max-w-4xl flex flex-col gap-10 items-center">
        <Slogan />

        <div className="max-w-md md:max-w-lg flex flex-col items-center gap-8 px-6">
          <p className="text-slate-600 font-medium sm:text-lg lg:text-xl text-center max-w-lg">Select the colors, the author, the device, and everything else that you possibly need.</p>

          <div className="w-full px-6 sm:px-12">
            <Button 
              onClick={handleClick}
              disabled={isLoading}
            >
              <div className="flex justify-center items-center gap-2">
                {isLoading ? (
                  <>
                    <Loader2 className="animate-spin size-5" />
                  </>
                ) : (
                  <>
                    <span>Start creating</span>
                    <ArrowRight className="size-5" />
                  </>
                )}
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  
  )
}