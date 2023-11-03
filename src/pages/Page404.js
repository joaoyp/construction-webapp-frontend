import { useEffect } from "react";

export const Page404 = () => {
  useEffect(() => {
    document.title = "PA - Construções | Página não encontrada";
  }, []);

  return (
    <>
      <main>error</main>
    </>
  );
};
