import { useEffect } from "react";
import { Banner } from "../components/common/Banner";
import { title } from "../functions/changeDocumentTitle";

export const About = () => {
  useEffect(() => {
    title("Sobre Nós");
  }, []);

  return (
    <main>
      <Banner text="Sobre Nós" />
      <div className="real-screen">sobre</div>
    </main>
  );
};
