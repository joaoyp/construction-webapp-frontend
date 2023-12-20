import { PrimaryButton } from "../../common/PrimaryButton";
import { Lettering } from "../../common/Lettering";

export const Estimate = () => {
  return (
    <div id="estimate" className="relative">
      <div className="h-[21vh] max-sm:h-96 bg-estimate bg-cover bg-fixed"></div>
      <div className="absolute inset-0 flex items-center text-white text-4xl font-bold justify-center bg-gradient-to-r from-transparent to-slate-800">
        <div className="flex flex-col items-center w-full text-center">
          <Lettering color={"orange"} text="Peça o seu orçamento" variant="h3" component="h2" />
          <Lettering color={"white"} text="Sem Compromisso" variant="h4" component="h3" />
          <div className="mt-2">
            <PrimaryButton
              bgcolor="orange"
              color="white"
              hoverBgColor="white"
              hoverColor="orange"
              size="large"
              variant="contained"
              text="Pedir orçamento"
              fontFamily="Alice"
              to={"/contactos"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
