import { Footer } from "./components/footer";
import { Header } from "./components/header";

export function CreatePage() {
  return (
    <main className="h-screen flex flex-col">
      <Header />
      <div className="flex-grow">
        Middle part
      </div>
      <Footer />
    </main>
  )
}