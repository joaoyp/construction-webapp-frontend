import { useEffect } from "react";

export const About = () => {
  useEffect(() => {
    document.title = "PA - Construções | Sobre Nós";
  }, []);

  return (
    <>
      <main>
        <p>sobre</p>
      </main>
    </>
  );
};
