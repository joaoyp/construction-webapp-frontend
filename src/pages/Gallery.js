import { useEffect } from "react";
import { title } from "../functions/changeDocumentTitle";

export const Gallery = () => {
  useEffect(() => {
    title("Portefólio");
  }, []);

  return (
    <>
      <div className="real-screen">portefolio</div>
    </>
  );
};
