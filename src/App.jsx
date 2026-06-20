import { Routes, Route } from "react-router-dom";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import AdminLogin from "@/pages/AdminLogin";
import AdminBar from "@/components/admin/AdminBar";
import { useAdmin } from "@/context/AdminContext";
import { useContent } from "@/context/ContentContext";

function Site() {
  const { isAdmin } = useAdmin();
  const { loading } = useContent();

  if (loading) return null;

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <AdminBar />
      {isAdmin && <div className="h-9" />}
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Site />} />
      <Route path="/admin" element={<AdminLogin />} />
    </Routes>
  );
}

export default App;
