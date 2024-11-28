import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Input } from "../../components/input";
import { Switch } from "../../components/switch";
import { Button } from "../../components/button";

export function CreatePage() {
  return (
    <main className="h-screen flex flex-col">
      <Header />
      <div className="flex-grow p-10">
        <div className="rounded-md border border-slate-300 space-y-6 p-6 w-1/3">
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
                  <span className="font-medium text-sm flex-1">Color</span>
                  <Input type="color" className="flex-shrink" />
                </div>

                <div className="flex justify-between">
                  <span className="font-regular text-sm text-slate-500">Select background's color</span>
                  <span className="font-normal text-slate-400 text-sm">(optional)</span>
                </div>
              </div>

              <div className="w-full flex flex-col gap-[6px]">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-sm flex-1">Color</span>
                  <Input type="color" className="flex-shrink" />
                </div>

                <div className="flex justify-between">
                  <span className="font-regular text-sm text-slate-500">Select text foreground color</span>
                  <span className="font-normal text-slate-400 text-sm">(optional)</span>
                </div>
              </div>

              <div className="inline-flex justify-between items-center">
                <span className="font-medium text-sm">Show author's name on quote</span>
                <Switch defaultChecked />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}