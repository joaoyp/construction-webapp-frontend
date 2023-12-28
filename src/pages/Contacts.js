import { useEffect } from "react";
import { title } from "../functions/changeDocumentTitle";
import { PrimaryButton } from "../components/common/PrimaryButton";
import { Lettering } from "../components/common/Lettering";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

export const Contacts = () => {
  useEffect(() => {
    title("Contactos");
  }, []);

  return (
    <>
      <div className="flex min-real-screen">
        <div className="w-full flex flex-col">
          <div className="absolute h-1/3 w-1/3 -mt-40 -ml-60 bg-orange-400 rounded-full"></div>
          <div className="absolute mt-8 ml-6">
            <Lettering text={"Contactos"} fontSize={50} color={"white"} />
          </div>
          <div className="pl-6 flex w-full justify-center">
            <div className="mt-56 flex flex-col gap-8 w-3/4">
              <Lettering
                text={"Tem alguma dúvida ou pretende  um orçamento?"}
                fontSize={24}
                color={"black"}
              />
              <Lettering
                text={
                  "Entre em contacto connosco, preenchendo o seguinte formulário."
                }
                fontSize={24}
                color={"black"}
              />
            </div>
          </div>
          <div className="pl-6 mt-24 w-full flex flex-col items-center">
            <div className="flex flex-col w-3/4">
              <Lettering fontSize={24} text={"Telefone:"} />
              <div className="flex items-center gap-2 mb-8">
                <PhoneIcon sx={{ color: "orange", fontSize: "28px" }} />
                <Lettering
                  text={"+351 966 420 506 / +351 96x xxx xxx"}
                  fontSize={22}
                  color={"black"}
                />
              </div>
              <Lettering fontSize={24} text={"Email:"} />
              <div className="flex items-center gap-2">
                <EmailIcon sx={{ color: "orange", fontSize: "28px" }} />
                <u>
                  <Lettering
                    text={"pa-construcoes@gmail.com"}
                    fontSize={22}
                    color={"black"}
                  />
                </u>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center bg-yellow-200">
          <form
            action="POST"
            onSubmit={() => {}}
            method="POST"
            className="bg-blue-200"
          ></form>
        </div>
      </div>
    </>
  );
};
