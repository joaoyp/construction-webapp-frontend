import { useEffect } from "react";

export const Gallery = () => {
  useEffect(() => {
    document.title = "PA - Construções | Galeria";
  }, []);

  return (
    <>
      <main>
        <p>galeria</p>
      </main>
    </>
  );
};
