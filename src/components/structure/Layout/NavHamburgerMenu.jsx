import { CustomLink } from "../../common/CustomLink";
import { useNavigate } from "react-router-dom";
import { Lettering } from "../../common/Lettering";
import { scrollTo } from "../../../functions/scrollTo";

export const NavHamburgerMenu = () => {
  const navigate = useNavigate();

  const handleClick = (element) => {
    navigate("/");
    setTimeout(() => {
      scrollTo(element);
    });
  };

  return (
    <ul className="xl:hidden bg-white shadow-xl gap-2 border-yellow-500 border-t-2 mt-24 h-fit left-0 top-0 right-0 absolute flex flex-col justify-center items-center pb-4 pt-4">
      <li className="hover:text-yellow-500 hover:underline hover:underline-offset-8">
        <Lettering onClick={() => handleClick("about-us")} text="Sobre Nós" fontSize={20}/>
      </li>
      <li className="hover:text-yellow-500 hover:underline hover:underline-offset-8">
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
