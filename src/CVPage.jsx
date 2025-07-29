import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { CV } from "./components/CV";

export default function CVPage() {
  return (
    <div className="font-sans bg-gray-50 text-gray-900 min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <CV />
      </main>
      <Footer />
    </div>
  );
}
