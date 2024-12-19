import { Background } from "@/components/Background";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Gallery } from "@/components/Gallery";
import { Skills } from "@/components/Skills";
import { Journey } from "@/components/Journey";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Copyright } from "@/components/Copyright";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Background />
      <Navigation />
      <Hero />
      <About />
      <Gallery />
      <Skills />
      <Journey />
      <Testimonials />
      <Contact />
      <Copyright />
    </main>
  );
};

export default Index;