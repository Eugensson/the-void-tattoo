import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Skills } from "@/components/skills";
import { Gallery } from "@/components/gallery";
import { Contact } from "@/components/contact";
import { Interview } from "@/components/interview";
import { Copyright } from "@/components/copyright";
import { Testimonial } from "@/components/testimonial";

const Home = () => {
  return (
    <main className="w-full max-w-480 mx-auto overflow-hidden bg-white">
      <Header />
      <Hero />
      <About />
      <Gallery />
      <Skills />
      <Interview />
      <Testimonial />
      <Contact />
      <Footer />
      <Copyright />
    </main>
  );
};

export default Home;
