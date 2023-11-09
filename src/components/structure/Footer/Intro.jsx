import { Typography } from "@mui/material";

export const Intro = () => {
  return (
    <div className="bg-red-200 w-1/3 flex flex-col">
      <div>
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
      <div className="flex items-end h-full mb-2">
        <Typography>
          © - Todos os direitos reservados a Pedro & Agostinho - Construções
        </Typography>
      </div>
    </div>
  );
};
