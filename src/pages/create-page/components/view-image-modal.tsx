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
      className={cn("fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center scale-0", className)}
      onClick={() => toggleModal(false)}
    >
      <Button 
        onClick={() => toggleModal(false)}
        className="absolute top-5 right-5 bg-gray-200 hover:bg-gray-300"
      >
        <X className="size-5 text-black" />
      </Button>

      <div className="w-full p-10 flex justify-center">
        <img 
          src={imgUrl} 
          alt="Generated Image" 
          className="max-w-4xl max-h-[80vh] w-full h-auto animate-scale-in rounded-md object-contain" 
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    </div>
  )
}