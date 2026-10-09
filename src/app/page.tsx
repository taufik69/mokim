import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import About from "@/components/sections/About";
import Programs from "@/components/sections/Programs";
import Funds from "@/components/sections/Funds";
import Donate from "@/components/sections/Donate";
import JoinUs from "@/components/sections/JoinUs";
import Gallery from "@/components/sections/Gallery";
import News from "@/components/sections/News";
import Newsletter from "@/components/sections/Newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Programs />
      <Funds />
      <Donate />
      <JoinUs />
      <Gallery />
      <Newsletter />
      <News />
    </>
  );
}
