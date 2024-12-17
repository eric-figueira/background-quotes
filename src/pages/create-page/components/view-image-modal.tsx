import { X } from "lucide-react"
import { Button } from "../../../components/button"
import { cn } from "../../../utils/cn"

interface ViewImageModalProps {
  imgUrl: string | undefined,
  toggleModal: (value: boolean) => void,
  className?: string,
}

export function ViewImageModal({ imgUrl, toggleModal, className }: ViewImageModalProps) {
  return (
    <div 
      className={cn("fixed inset-0 bg-black/60 flex items-center justify-center scale-0", className)}
      onClick={() => toggleModal(false)}
    >
      <Button 
        onClick={() => toggleModal(false)}
        className="absolute top-5 right-5 bg-gray-200 hover:bg-gray-300"
      >
        <X className="size-5 text-black" />
      </Button>

      <img 
        src={imgUrl} 
        alt="Generated Image" 
        className="max-w-5xl animate-scale-in" 
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  )
}