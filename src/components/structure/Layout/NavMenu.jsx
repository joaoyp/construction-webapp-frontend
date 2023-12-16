import { CustomLink } from "../../common/CustomLink";
import { scrollTo } from "../../../functions/scrollTo";
import { Lettering } from "../../common/Lettering";
import { useNavigate } from "react-router-dom";

export const NavMenu = () => {
  const navigate = useNavigate();

  const handleClick = (element) => {
    navigate("/");
    setTimeout(() => {
      scrollTo(element);
    });
  };

  return (
    <ul className="max-xl:hidden flex justify-center gap-8 h-20 items-center">
      <li className="hover:text-yellow-500 hover:underline hover:underline-offset-8 cursor-pointer">
        <Lettering onClick={() => handleClick("about-us")} text="Sobre Nós" fontSize={20}/>
      </li>
      <li className="hover:text-yellow-500 hover:underline hover:underline-offset-8 cursor-pointer">
        <Lettering onClick={() => handleClick("services")} text="Serviços" fontSize={20}/>
      </li>
      <li className="hover:text-yellow-500 hover:underline hover:underline-offset-8">
        <CustomLink to="/portefolio" text="Portefólio" />
      </li>
      <li className=" hover:text-yellow-500 hover:underline hover:underline-offset-8">
        <CustomLink to="/contactos" text="Contactos" />
      </li>
    </ul>
  );
};
