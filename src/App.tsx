import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Metalwork from "@/components/sections/Metalwork";
import Forging from "@/components/sections/Forging";
import Furniture from "@/components/sections/Furniture";
import OtherIronWorks from "@/components/sections/OtherIronWorks";
import ProjectGallery from "@/components/ProjectGallery";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowWeWork from "@/components/HowWeWork";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

function App() {
  return (
    <div className="min-h-screen bg-ivory">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Metalwork />
        <Forging />
        <Furniture />
        <OtherIronWorks />
        <ProjectGallery />
        <WhyChooseUs />
        <HowWeWork />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
