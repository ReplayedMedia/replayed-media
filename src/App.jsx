import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import How from "./components/How";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Why from "./components/Why";

const App = () => {
  return (
    <>
      <Navbar />
      
      {/* HeroSection */}
      <section id="hero" className="scroll-mt-24">
        <HeroSection />
      </section>
      
      <main className="max-w-7xl mx-auto pt-20 px-6">
        <section id="about" className="scroll-mt-24">
          <About />
        </section>

        <section id="how" className="scroll-mt-24">
          <How />
        </section>

        <section id="why" className="scroll-mt-24">
          <Why />
        </section>

        <section id="contact" className="scroll-mt-24">
          <Contact />
        </section>

        <Footer />
      </main>
    </>
  );
};

export default App;