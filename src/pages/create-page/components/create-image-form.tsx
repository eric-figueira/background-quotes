import { Controller, useForm } from "react-hook-form";
import { Button } from "../../../components/button";
import { Input } from "../../../components/input";
import { 
  Select, 
  SelectContent, 
  SelectGroup, 
  SelectItem, 
  SelectLabel, 
  SelectTrigger, 
  SelectValue 
} from "../../../components/select";
import { Switch } from "../../../components/switch";
import { devices } from "../../../data/devices";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslation } from "react-i18next";
import { Info } from "lucide-react";

interface CreateImageFormProps {
  handleCreateImage: (data: CreateImageSchema) => void,
}

const createImageSchema = z.object({
  author: z.string().optional(),
  minLength: z.string().optional(),
  maxLength: z.string().optional(),
  backgroundColor: z.string().optional(),
  foregroundColor: z.string().optional(),
  showAuthor: z.boolean().optional(),
  device: z.string().optional()
})

export type CreateImageSchema = z.infer<typeof createImageSchema>

export function CreateImageForm({
  handleCreateImage
}: CreateImageFormProps) {
  const { t } = useTranslation()

  const { register, handleSubmit, control } = useForm({
    resolver: zodResolver(createImageSchema)
  })

  return (
    <form onSubmit={handleSubmit(handleCreateImage)} className="space-y-4">
      <div className="rounded-md border border-slate-300 space-y-6 p-6">
        <div className="space-y-4">
          <h2 className="font-semibold text-2xl">{t("createFormQuoteTitle")}</h2>

          <div className="flex flex-col gap-4">  
            <div className="w-full flex flex-col gap-[6px]">
              <span className="font-medium text-sm">{t("createFormAuthorLabel")}</span>

              <Input  
                type="text" 
                placeholder="e.g. Sun Tzu" 
                {...register("author")} 
              />
            </div>

            <div className="w-full flex items-center gap-4">
              <div className="w-full flex flex-col gap-[6px]">
                <span className="font-medium text-sm">{t("createFormMinLengthLabel")}</span>
                <Input 
                  type="number"
                  placeholder="e.g. 20" 
                  min={0} 
                  max={200} 
                  {...register("minLength")} 
                />
              </div>

              <div className="w-full flex flex-col gap-[6px]">
                <span className="font-medium text-sm">{t("createFormMaxLengthLabel")}</span>
                <Input 
                  type="number" 
                  placeholder="e.g. 80" 
                  min={0} 
                  max={200} 
                  {...register("maxLength")} 
                />
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-md text-slate-400 flex gap-2 items-center px-4 py-2">
              <Info className="size-5" />
              <p className="text-sm">{t("createFormOptional")}</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="font-semibold text-2xl">{t("createFormBackgroundTitle")}</h2>

          <div className="space-y-4">
            <div className="flex flex-col">  
              <div className="w-full flex flex-col gap-[6px]">
                <div className="flex items-center gap-2">
                  <div className="w-1/2">
                    <label className="font-medium text-sm flex-1" htmlFor="backgroundColorPicker">{t("createFormBackgroundColorLabel")}</label>
                  </div>
                  <div className="w-1/2">
                    <Input
                      type="color"
                      className="w-full h-10 p-0 rounded-md border-none inset-0 appearance-none bg-transparent"
                      id="backgroundColorPicker"
                      {...register("backgroundColor")}
                    />
                  </div>
                </div>
              </div>

              <div className="w-full flex flex-col gap-[6px]">
                <div className="flex items-center gap-2">
                  <div className="w-1/2">
                    <label className="font-medium text-sm flex-1" htmlFor="foregroundColorPicker">{t("createFormForegroundColorLabel")}</label>
                  </div>
                  <div className="w-1/2">
                    <Input 
                      type="color"
                      className="w-full h-10 p-0 rounded-md border-none inset-0 appearance-none bg-transparent"
                      id="foregroundColorPicker"
                      defaultValue="#ffffff"
                      {...register("foregroundColor")}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full inline-flex justify-between gap-2 items-center">
              <span className="font-medium text-sm">{t("createFormShowAuthorLabel")}</span>
              <Controller 
                name="showAuthor"
                control={control}
                defaultValue={true}
                render={({ field }) => (
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                )}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-md border border-slate-300 space-y-4 p-6">
        <h2 className="font-semibold text-2xl">{t("createFormCreateImageTitle")}</h2>

        <div className="flex flex-col gap-4">
          <div className="w-full flex flex-col gap-[6px]">
            <span className="font-medium text-sm">{t("createFormDeviceLabel")}</span>
            
            <Controller
              name="device"
              control={control}
              defaultValue="desktop"
              render={({ field }) => (
                <Select {...field} onValueChange={field.onChange}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Devices</SelectLabel>
                      {devices.map((item) => {
                        return (
                          <SelectItem 
                            value={item.slug} 
                            className="w-full"
                            key={item.slug}
                          >
                            <div className="w-full inline-flex justify-between items-center">
                              <span>{item.name}</span>
                              <span className="text-xs text-slate-600">{item.width} x {item.height}</span>
                            </div>
                          </SelectItem>
                        )
                      })}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              )}
            />
          </div>

          <Button className="w-full" type="submit">
            {t("createFormSubmitButton")}
          </Button>
        </div>
      </div>
    </form>
  )
}