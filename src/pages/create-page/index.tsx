import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Input } from "../../components/input";
import { Switch } from "../../components/switch";
import { Button } from "../../components/button";

import { 
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectGroup,
  SelectLabel
} from "../../components/select";
import { devices } from "../../data/devices";
import { useState } from "react";


export function CreatePage() {
  const [device, setDevice] = useState('desktop')

  return (
    <main className="h-screen flex flex-col">
      <Header />
      <div className="flex-grow p-10">
        <div className="w-1/3 space-y-4">
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
                    <Input type="text" placeholder="e.g. Sun Tzu" />
                    <Button className="bg-slate-100 text-slate-950 hover:bg-slate-200 font-medium">Search</Button>
                  </div>

                  <span className="font-regular text-sm text-slate-500">Search for any author</span>
                </div>

                <div className="w-full flex items-center gap-4">
                  <div className="w-full flex flex-col gap-[6px]">
                    <span className="font-medium text-sm">Min length</span>
                    <Input type="number" placeholder="e.g. 20" />
                  </div>

                  <div className="w-full flex flex-col gap-[6px]">
                    <span className="font-medium text-sm">Max length</span>
                    <Input type="number" placeholder="e.g. 80" />
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
                      />
                    </div>
                  </div>
                </div>

                <div className="inline-flex justify-between items-center">
                  <span className="font-medium text-sm">Show author's name on quote</span>
                  <Switch defaultChecked />
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

                <Select value={device} onValueChange={(value) => setDevice(value)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Devices</SelectLabel>
                      {devices.map((item) => {
                        return (
                          <SelectItem value={item.slug} className="w-full">
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

                {/* <span className="font-regular text-sm text-slate-500">Select the device's size</span> */}
              </div>

              <Button className="w-full">
                Create image
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}