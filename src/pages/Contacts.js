import { useEffect } from "react";
import { Banner } from "../components/common/Banner";
import { title } from "../functions/changeDocumentTitle";

export const Contacts = () => {
  useEffect(() => {
    title("Contactos");
  }, []);

  return (
    <main>
      <Banner text="Contactos" />
      <div>contactos</div>
    </main>
  );
};
