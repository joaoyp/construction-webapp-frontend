import { Typography } from "@mui/material";

export const Intro = () => {
  return (
    <div className="max-xl:items-center w-full flex flex-col">
      <div className="text-center">
        <Typography
          color="orange"
          fontFamily="Alice"
          variant="h4"
          component="h2"
        >
          Pedro & Agostinho
        </Typography>
      </div>
      <div className="break-words mt-4 w-3/4">
        <Typography>
          Pedro & Agostinho é uma empresa cujo o objetivo é a qualidade dos
          trabalhos e a satisfação do cliente através de soluções eficazes e de
          excelência.
        </Typography>
      </div>
      <div className="flex items-end h-full mt-4 mb-4">
        <Typography>
          © - Todos os direitos reservados a P&A - Construções
        </Typography>
      </div>
    </div>
  );
};
