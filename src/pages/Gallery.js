import { useEffect } from "react";
import { Banner } from "../components/common/Banner";
import { title } from "../functions/changeDocumentTitle";

export const Gallery = () => {
  useEffect(() => {
    title("Portefólio");
  }, []);

  return (
    <main>
      <Banner text="Portefólio" />
      <div className="real-screen">portefolio</div>
    </main>
  );
};
