import { PrimaryButton } from "../../common/PrimaryButton";
import { Lettering } from "../../common/Lettering";

export const Estimate = () => {
  return (
    <div id="estimate" className="relative">
      <div className="h-60 bg-estimate bg-cover bg-fixed"></div>
      <div className="absolute inset-0 flex items-center text-white text-4xl font-bold justify-center bg-slate-800">
        <div className="flex flex-col items-center w-full">
          <Lettering color={"white"} text="Peça o seu orçamento" variant="h2" component="h1" />
          <div className="mt-10">
            <PrimaryButton
              bgcolor="orange"
              color="white"
              hoverBgColor="white"
              hoverColor="orange"
              size="large"
              variant="contained"
              text="Pedir orçamento"
              fontFamily="Alice"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
