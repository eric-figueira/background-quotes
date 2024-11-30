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
  const { register, handleSubmit, setValue, watch, control } = useForm({
    resolver: zodResolver(createImageSchema)
  })

  async function handleSearchAuthor() {
    const author = watch("author")

    const response = await fetch(`http://localhost:5000/search-author?author="${author}"`, {
      method: "GET",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    })
    const json = await response.json()

    const exists      = json["exists"]
    const authorFound = json["author_found"]

    if (exists) {
      setValue("author", authorFound)
    } else {
      alert("ERROR validating author")
    }
  }

  return (
    <form onSubmit={handleSubmit(handleCreateImage)} className="space-y-4">
      <div className="rounded-md border border-slate-300 space-y-6 p-6">
        <div className="space-y-4">
          <h2 className="font-semibold text-2xl">Quote</h2>

          <div className="flex flex-col gap-4">  
            <div className="w-full flex flex-col gap-[6px]">
              <div className="flex justify-between">
                <span className="font-medium text-sm">Author</span>
                <span className="font-normal text-slate-400 text-sm">(optional)</span>
              </div>

              <div className="flex gap-2">
                <Input  
                  type="text" 
                  placeholder="e.g. Sun Tzu" 
                  {...register("author")} 
                />
                <Button 
                  className="bg-slate-100 text-slate-950 hover:bg-slate-200 font-medium"
                  onClick={handleSearchAuthor}
                >
                  Search
                </Button>
              </div>

              <span className="font-regular text-sm text-slate-500">Search for any author</span>
            </div>

            <div className="w-full flex items-center gap-4">
              <div className="w-full flex flex-col gap-[6px]">
                <span className="font-medium text-sm">Min length</span>
                <Input 
                  type="number"
                  placeholder="e.g. 20" 
                  min={0} 
                  max={200} 
                  {...register("minLength")} 
                />
              </div>

              <div className="w-full flex flex-col gap-[6px]">
                <span className="font-medium text-sm">Max length</span>
                <Input 
                  type="number" 
                  placeholder="e.g. 80" 
                  min={0} 
                  max={200} 
                  {...register("maxLength")} 
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-[1px] bg-slate-300" />

        <div className="space-y-4">
          <h2 className="font-semibold text-2xl">Background</h2>

          <div className="flex flex-col gap-4">  
            <div className="w-full flex flex-col gap-[6px]">
              <div className="flex items-center gap-2">
                <div className="w-1/2 flex flex-col gap-1">
                  <label className="font-medium text-sm flex-1" htmlFor="backgroundColorPicker">Background Color</label>
                  <span className="font-normal text-slate-400 text-sm">(optional)</span>
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
                <div className="w-1/2 flex flex-col gap-1">
                  <label className="font-medium text-sm flex-1" htmlFor="foregroundColorPicker">Foreground Color</label>
                  <span className="font-normal text-slate-400 text-sm">(optional)</span>
                </div>
                <div className="w-1/2">
                  <Input 
                    type="color"
                    className="w-full h-10 p-0 rounded-md border-none inset-0 appearance-none bg-transparent"
                    id="foregroundColorPicker"
                    {...register("foregroundColor")}
                  />
                </div>
              </div>
            </div>

            <div className="inline-flex justify-between gap-2 items-center">
              <span className="font-medium text-sm">Show author's name on quote</span>
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
        <h2 className="font-semibold text-2xl">Create image</h2>

        <div className="flex flex-col gap-4">
          <div className="w-full flex flex-col gap-[6px]">
            <div className="flex justify-between">
              <span className="font-medium text-sm">Device</span>
              <span className="font-normal text-slate-400 text-sm">(optional)</span>
            </div>

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
            Create image
          </Button>
        </div>
      </div>
    </form>
  )
}