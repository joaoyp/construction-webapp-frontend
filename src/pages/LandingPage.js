import { useEffect } from "react";
import { Hero } from "../components/structure/Landing/Hero";
import { scrollTo } from "../functions/scrollTo";
import { title } from "../functions/changeDocumentTitle";
import { Services } from "../components/structure/Landing/Services";
import { DemoProjects } from "../components/structure/Landing/DemoProjects";
import { About } from "../components/structure/Landing/About";
import { Estimate } from "../components/structure/Landing/Estimate";

export const LandingPage = () => {
  useEffect(() => {
    title("Início");
  }, []);

  return (
    <>
      <section>
        <Hero scrollTo={scrollTo} />
      </section>
      <section id="about-us">
        <About />
      </section>
      <section>
        <Estimate />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="demo-projects">
        <DemoProjects />
      </section>
    </>
  );
};
