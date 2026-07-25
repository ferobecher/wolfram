import { Analytics } from "@vercel/analytics/react";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Prebuilds from "@/components/sections/Prebuilds";
import Process from "@/components/sections/Process";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

function App() {
  return (
    <>
      <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <Prebuilds />
          <Process />
          <Contact />
        </main>
        <Footer />
      </div>
      <Analytics />
    </>
  );
}

export default App;
