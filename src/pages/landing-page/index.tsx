import { Button } from "../../components/button";
import { Slogan } from "./components/slogan";

export function LandingPage() {
  return (
    <div className="h-screen flex justify-center items-center bg-grid-black/[0.05]">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)]" />

      <div className="max-w-4xl flex flex-col gap-10 items-center">
        <Slogan />

        <div className="max-w-lg flex flex-col items-center gap-8">
          <p className="text-slate-600 font-medium text-xl text-center">Select the colors, the author, the device, and everything else that you possibly need.</p>
          <div className="w-full px-12">
            <Button>
              Start creating
            </Button>
          </div>
        </div>
      </div>
    </div>
  
  )
}