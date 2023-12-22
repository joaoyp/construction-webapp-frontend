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
      <div className="flex bg-red-200 min-real-screen">
        <div className="w-full flex flex-col">
          <div className="mt-8 flex w-full justify-center">
            <Lettering text={"Contactos"} fontSize={50} color={"orange"} />
          </div>
          <div className="flex w-full justify-center">
            <div className="mt-4 flex flex-col gap-8 w-2/3">
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
          <div className="w-2/3 mt-12 flex flex-col items-center">
            <div className="flex flex-col w-fit">
              <div className="flex items-center gap-2">
                <PhoneIcon sx={{ color: "orange", fontSize: "28px" }} />
                <Lettering
                  text={"+351 966 420 506"}
                  fontSize={22}
                  color={"black"}
                />
              </div>
              <div className="flex items-center gap-2">
                <EmailIcon sx={{ color: "orange", fontSize: "28px" }} />
                <Lettering
                  text={"pa-construcoes@gmail.com"}
                  fontSize={22}
                  color={"black"}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center">
          <form
            action="POST"
            onSubmit={() => {}}
            method="POST"
            className="bg-blue-200"
          >
            <div className="pt-0 mb-3">
              <input
                type="text"
                placeholder="Your name"
                name="name"
                className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
                required
              />
            </div>

            <div className="pt-0 mb-3">
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
                required
              />
            </div>

            <div className="pt-0 mb-3">
              <textarea
                placeholder="Your message"
                name="message"
                className=""
                required
              />
            </div>

            <div className="pt-0 mb-3">
              <PrimaryButton
                type={"submit"}
                text={"Enviar"}
                bgcolor={"orange"}
                color={"white"}
                hoverBgColor={"white"}
                hoverColor={"orange"}
                size={"large"}
                variant={"contained"}
                fontFamily={"Alice"}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
