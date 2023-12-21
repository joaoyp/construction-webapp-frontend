import { Typography } from "@mui/material";
import { FooterLink } from "../../common/FooterLink";
import { scrollToTop } from "../../../functions/scrollToTop";
import { useNavigate } from "react-router-dom";
import { scrollTo } from "../../../functions/scrollTo";

export const Menu = () => {
  const navigate = useNavigate();

  const handleClick = (element) => {
    navigate("/");
    setTimeout(() => {
      scrollTo(element);
    });
  };

  return (
    <div className="w-full flex flex-col gap-1 items-center">
      <div>
        <Typography color="orange" fontFamily="Alice" fontSize={32}>
          Menu
        </Typography>
      </div>
      <div className="hover:text-yellow-500" onClick={scrollToTop}>
        <FooterLink text="Início" fontSize={18} color="white" to="/" />
      </div>
      <div className="hover:text-yellow-500" onClick={() => handleClick("about-us")}>
        <FooterLink text="Sobre Nós" fontSize={18} color="white" to="/#sobre-nos" />
      </div>
      <div className="hover:text-yellow-500" onClick={() => handleClick("services")}>
        <FooterLink
          text="Serviços"
          fontSize={18}
          color="white"
          to="/servicos"
        />
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
          text="Contactos"
          fontSize={18}
          color="white"
          to="/contactos"
        />
      </div>
    </div>
  );
};
