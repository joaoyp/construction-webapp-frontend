import { useEffect } from "react";
import { Hero } from "../components/structure/Landing/Hero";
import { scrollToDemoProjects } from "../functions/scrollToDemoProjects";
import { title } from "../functions/changeDocumentTitle";

export const LandingPage = () => {
  useEffect(() => {
    title("Início");
  }, []);

  return (
    <>
      <main>
        <Hero scrollToDemoProjects={scrollToDemoProjects} />
        <div id="demo-projects" className="real-screen">
          <p>t</p>
        </div>
        <div id="about">about</div>
        <div id="services">serviços</div>
      </main>
    </>
  );
};
