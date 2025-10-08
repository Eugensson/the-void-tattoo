import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Header } from "@/components/header";
import { Gallery } from "@/components/gallery";

const Home = () => {
  return (
    <main className="w-full max-w-480 mx-auto overflow-hidden bg-white">
      <Header />
      <Hero />
      <About />
      <Gallery />
      <div className="h-1000" />
    </main>
  );
};

export default Home;
