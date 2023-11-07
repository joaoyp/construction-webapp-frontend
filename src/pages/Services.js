import { useEffect } from "react";
import { Banner } from "../components/common/Banner";
import { title } from "../functions/changeDocumentTitle";

export const Services = () => {
  useEffect(() => {
    title("Serviços");
  }, []);

  return (
    <>
      <main>
        <Banner text="Serviços" />
        <div>serviços</div>
      </main>
    </>
  );
};
