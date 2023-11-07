import { Typography } from "@mui/material";
import { PrimaryButton } from "../../common/PrimaryButton";
import { Lettering } from "../../common/Lettering";

export const Estimate = () => {
  return (
    <div id="estimate" className="relative">
      <div className="h-80 bg-estimate bg-cover bg-fixed"></div>
      <div className="absolute inset-0 flex items-center text-white text-4xl font-bold justify-center bg-opacity-40 bg-black">
        <div className="flex flex-col items-center w-full">
          <Lettering text="Qualidade e Eficácia" variant="h2" component="h1" />
          <div className="mt-8">
            <Lettering
              text="Peça o seu orçamento:"
              variant="h4"
              component="h2"
            />
          </div>
          <div className="mt-6">
            <PrimaryButton
              bgcolor="orange"
              color="white"
              hoverBgColor="white"
              hoverColor="orange"
              size="large"
              variant="contained"
              text="Aqui"
              fontFamily="Alice"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
