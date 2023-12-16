import { useEffect } from "react";
import { title } from "../functions/changeDocumentTitle";

export const Contacts = () => {
  useEffect(() => {
    title("Contactos");
  }, []);

  return (
    <>
      <div className="real-screen">contactos</div>
    </>
  );
};
