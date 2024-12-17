import { Footer } from "./components/footer";
import { Header } from "./components/header";

import { useState } from "react";
import { CreateImageForm, CreateImageSchema } from "./components/create-image-form";
import { devices } from "../../data/devices";
import { Link } from "../../components/link";
import { Button } from "../../components/button";
import { Download, ImageOff } from "lucide-react";
import { useTranslation } from "react-i18next";


export function CreatePage() {
  const { t } = useTranslation()
  const [image, setImage] = useState<string | undefined>()

  async function handleCreateImage(data: CreateImageSchema) {
    console.log(data)

    const minLength = Number(data.minLength)
    const maxLength = Number(data.maxLength)

    const device = devices.find(dev => dev.slug === data.device)
    const width = device!.width
    const height = device!.height

    const response = await fetch('http://localhost:5000/create', {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "author": data.author,
        "min_length": minLength,
        "max_length": maxLength,
        "background_color": data.backgroundColor,
        "foreground_color": data.foregroundColor,
        "show_author": data.showAuthor,
        "width": width,
        "height": height
      })
    })

    const blob = await response.blob()
    const url = URL.createObjectURL(blob)
    setImage(url)
  }

  return (
    <main className="h-screen flex flex-col">
      <Header />
      <div className="flex flex-col md:flex-row gap-8 flex-grow p-8 md:p-10">
        <div className="w-full sm:w-2/3 md:w-2/5 lg:w-1/3">
          <CreateImageForm handleCreateImage={handleCreateImage} />
        </div>
        <div className="flex-grow">
          <div className="rounded-md border border-slate-300 space-y-6 p-6">
            <h2 className="font-semibold text-2xl w-fit">{t("createResultsTitle")}</h2>
            
              <>
                {image === undefined ? (
                  <div className="bg-slate-50 border border-slate-200 rounded-md text-slate-400 flex gap-4 items-center p-4">
                    <ImageOff className="size-10" />
                    <p className="font-medium">{t("createResultsNoImage")}</p>
                  </div>
                ) : (
                  <div className="flex gap-4">
                    <img src={image} alt="Generated Image" />

                    <Link href={image} download="generated.png">
                      <Button className="gap-2">
                        <>
                          <span>{t("createResultsDownloadButton")}</span>
                          <Download className="size-5" />
                        </>
                      </Button>
                    </Link>
                  </div>
                )}
              </>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}