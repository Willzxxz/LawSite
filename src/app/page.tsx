import Navbar from "../sections/Navbar";
import Hero from "../sections/Hero";
import About from "../sections/About";
import WorkAreas from "../sections/WorkAreas";
import Team from "../sections/Team";
import Testimonials from "../sections/Testimonials";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <WorkAreas />
        <Team />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
