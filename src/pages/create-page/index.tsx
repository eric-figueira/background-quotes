import { Footer } from "./components/footer";
import { Header } from "./components/header";

import { useState } from "react";
import { CreateImageForm, CreateImageSchema } from "./components/create-image-form";
import { devices } from "../../data/devices";
import { Link } from "../../components/link";
import { Button } from "../../components/button";
import { Download, Fullscreen, ImageOff } from "lucide-react";
import { useTranslation } from "react-i18next";
import { ViewImageModal } from "./components/view-image-modal";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from "../../components/dialog";

const api = import.meta.env.VITE_CORE_URL

interface Error {
  error: string,
  details: string,
  service?: string
}

export function CreatePage() {
  const { t, i18n } = useTranslation()

  const [image, setImage] = useState<string>()
  const [isViewImageModalOpen, setIsViewImageModalOpen] = useState(false)
  const [isFetching, setIsFetching] = useState(false)
  const [showError, setShowError] = useState(false)
  const [error, setError] = useState<Error>()

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function isErrorFormatted(data: any) {
    return (
      typeof data === "object" &&
      typeof data.error === "string" &&
      typeof data.details === "string" &&
      (typeof data.service === "undefined" || typeof data.service === "string")
    )
  }

  async function handleCreateImage(data: CreateImageSchema) {

    const minLength = Number(data.minLength)
    const maxLength = Number(data.maxLength)

    const device = devices.find(dev => dev.slug === data.device)
    const width = device!.width
    const height = device!.height

    const language = i18n.language.slice(0, 2)

    setIsFetching(true)

    const response = await fetch(`${api}/create`, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "author": data.author === "" ? null : data.author,
        "min_length": minLength,
        "max_length": maxLength,
        "background_color": data.backgroundColor,
        "foreground_color": data.foregroundColor,
        "show_author": data.showAuthor,
        "width": width,
        "height": height,
        "language": language
      })
    })

    setIsFetching(false)

    if (response.status === 200) {
      const blob = await response.blob()
      const url = URL.createObjectURL(blob)
      setImage(url)
    }
    else {
      let error: Error

      try {
        const e = await response.json()

        if (isErrorFormatted(e)) { error = e }
        else {
          error = {
            error: "Unkown Error",
            details: "An unexpected error happenned. Try again later."
          }
        }
      } catch { 
        error = {
          error: "Format Error",
          details: "The error could not be processed."
        }
      }

      setError(error)
      setShowError(true)
    } 
  }

  function toggleViewImageModalOpen(v: boolean) { setIsViewImageModalOpen(v) }

  return (
    <main className="h-screen flex flex-col">
      <Header />
      <div className="flex flex-col md:flex-row gap-4 flex-grow p-8 md:p-10">
        <div className="w-full sm:w-2/3 md:w-3/5 lg:w-1/3">
          <CreateImageForm 
            handleCreateImage={handleCreateImage} 
            isFetching={isFetching}
          />
        </div>
        <div className="flex-grow">
          <div className="rounded-md border border-slate-300 space-y-6 p-6">
            <h2 className="font-semibold text-2xl w-fit">{t("createResultsTitle")}</h2>
            
              <>
                {isFetching ? (
                  <div className="flex gap-4">
                    <div className="bg-slate-200 animate-pulse rounded-md w-64 h-fill" />
                    <div className="flex flex-col gap-2">
                      <div className="bg-slate-200 animate-pulse rounded-md h-8 w-32" />
                      <div className="bg-slate-200 animate-pulse rounded-md h-8 w-32" />
                    </div>
                  </div>
                ) :
                  image === undefined ? (
                    <div className="bg-slate-50 border border-slate-200 rounded-md text-slate-400 flex gap-4 items-center p-4">
                      <ImageOff className="size-10" />
                      <p className="font-medium">{t("createResultsNoImage")}</p>
                    </div>
                  ) : (
                    <div className="flex flex-wrap gap-4">
                      <img 
                        src={image} 
                        alt="Generated Image" 
                        className="max-h-[16rem] lg:max-h-[20rem] cursor-pointer hover:ring-2 hover:ring-offset-2 hover:ring-gray-300 rounded-md" 
                        onClick={() => toggleViewImageModalOpen(true)}
                      />

                      <div className="flex flex-col gap-2 w-full max-w-[12rem]">
                        <Button 
                          className="gap-2 bg-gray-200 hover:bg-gray-300 text-slate-900"
                          onClick={() => toggleViewImageModalOpen(true)}
                        >
                          <>
                            <Fullscreen className="size-5" />
                            <span>{t("createResultsViewImageButton")}</span>
                          </>
                        </Button>

                        <Link href={image} download="generated.png" className="w-full">
                          <Button className="gap-2 w-full">
                            <>
                              <Download className="size-5" />
                              <span>{t("createResultsDownloadButton")}</span>
                            </>
                          </Button>
                        </Link>
                      </div>
                    </div>
                  )
                }
              </>
          </div>
        </div>
      </div>
      <Footer />

      {isViewImageModalOpen && (
        <ViewImageModal 
          imgUrl={image} 
          toggleModal={toggleViewImageModalOpen}
          className="scale-100 transition"
        />
      )}

      <Dialog open={showError} onOpenChange={() => setShowError(false)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{error?.error}</DialogTitle>
            <DialogDescription>
              {t("createErrorDialogDescription")}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-2">
            <div className="space-y-[0.15rem]">
              <span className="text-sm font-semibold">{t("createErrorDialogDetailsLabel")}</span>
              <p className="text-sm text-slate-800">{error?.details}</p>
            </div>

            {error?.service !== undefined && (
              <div className="space-y-[0.15rem]">
                <span className="text-sm font-semibold">{t("createErrorDialogServiceLabel")}</span>
                <p className="text-sm text-slate-800">{error?.service}</p>
              </div>
            )}
          </div>
          <DialogFooter>
            <Button type="button" onClick={() => setShowError(false)}>{t("createErrorDialogButton")}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </main>
  )
}