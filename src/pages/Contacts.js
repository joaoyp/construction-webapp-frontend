import { useEffect } from "react";

export const Contacts = () => {
  useEffect(() => {
    document.title = "PA - Construções | Contactos";
  }, []);

  return (
    <>
      <main>
        <p>contactos</p>
      </main>
    </>
  );
};
