import { Hero } from "@/components/hero";
import { Header } from "@/components/header";

const Home = () => {
  return (
    <main className="w-full max-w-480 mx-auto overflow-hidden bg-white">
      <Header />
      <Hero />
      <div className="h-1000" />
    </main>
  );
};

export default Home;
