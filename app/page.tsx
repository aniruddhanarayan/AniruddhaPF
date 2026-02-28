import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { ScrollAnimations } from "@/components/ScrollAnimations";
import { Header } from "@/components/Header";

function Divider() {
  return (
    <div className="divider">
      <div className="divider-line"></div>
      <div className="divider-diamond"></div>
      <div className="divider-line"></div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="page">
      <ScrollAnimations />
      <Header />
      <Hero />
      <Divider />
      <About />
      <Divider />
      <Experience />
      <Divider />
      <Projects />
      <Divider />
      <Skills />
      <Divider />
      <Contact />
    </div>
  );
}
