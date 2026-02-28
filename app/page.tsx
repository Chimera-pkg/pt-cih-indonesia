import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Organization from "@/components/Organization";
import Production from "@/components/Production";
import Maintenance from "@/components/Maintenance";
import Standards from "@/components/Standards";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="font-sans text-gray-700 bg-white">
      <Navbar />
      <Hero />
      <About />
      {/* <Organization /> */}
      <Production />
      <Maintenance />
      <Standards />
      {/* <Partners /> */}
      <Footer />
    </main>
  );
}
