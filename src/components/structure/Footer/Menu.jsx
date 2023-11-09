import { Typography } from "@mui/material";
import { FooterLink } from "../../common/FooterLink";

export const Menu = () => {
  return (
    <div className="bg-green-200 w-1/3 flex flex-col gap-1 items-center">
      <div>
        <Typography color="orange" fontFamily="Alice" fontSize={32}>
          Menu
        </Typography>
      </div>
      <div className="hover:text-yellow-500">
        <FooterLink text="Início" fontSize={18} color="white" to="/" />
      </div>
      <div className="hover:text-yellow-500">
        <FooterLink text="Sobre Nós" fontSize={18} color="white" to="/sobre" />
      </div>
      <div className="hover:text-yellow-500">
        <FooterLink
          text="Portefólio"
          fontSize={18}
          color="white"
          to="/portefolio"
        />
      </div>
      <div className="hover:text-yellow-500">
        <FooterLink
          text="Serviços"
          fontSize={18}
          color="white"
          to="/servicos"
        />
      </div>
      <div className="hover:text-yellow-500">
        <FooterLink
          text="Contactos"
          fontSize={18}
          color="white"
          to="/contactos"
        />
      </div>
    </div>
  );
};
