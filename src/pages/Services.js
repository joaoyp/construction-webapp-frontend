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
        <div className="real-screen">serviços</div>
      </main>
    </>
  );
};
