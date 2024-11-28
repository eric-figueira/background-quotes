import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Input } from "../../components/input";

export function CreatePage() {
  return (
    <main className="h-screen flex flex-col">
      <Header />
      <div className="flex-grow p-10">
        <div className="rounded-md border border-slate-300 space-y-4 p-6 w-1/3">
          <div className="space-y-[6px]">
            <h2 className="font-semibold text-2xl">Quote</h2>

            <div className="flex flex-col gap-4">

              

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

          {/* <div className="w-full h-[1px] bg-slate-300" />

          <div>

          </div> */}
        </div>
      </div>
      <Footer />
    </main>
  )
}