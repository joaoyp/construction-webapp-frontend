import { useEffect } from "react";
import { Hero } from "../components/structure/Landing/Hero";
import { scrollTo } from "../functions/scrollTo";
import { title } from "../functions/changeDocumentTitle";

export const LandingPage = () => {
  useEffect(() => {
    title("Início");
  }, []);

  return (
    <>
      <main>
        <Hero scrollTo={scrollTo} />
        <div id="about-us" className="real-screen">
          <p>Sobre Nós</p>
        </div>
        <div id="services" className="real-screen">
          <p>Serviços</p>
        </div>
        <div id="demo-projects" className="real-screen">
          <p>Demo Projects</p>
        </div>
      </main>
    </>
  );
};
