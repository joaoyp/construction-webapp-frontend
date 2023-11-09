import { CustomLink } from "../../common/CustomLink";

export const NavMenu = () => {
  return (
    <ul className="max-xl:hidden flex justify-center gap-8 h-20 items-center">
      <li className="hover:text-yellow-500 hover:underline hover:underline-offset-8">
        <CustomLink to="/sobre" text="Sobre Nós" />
      </li>
      <li className="hover:text-yellow-500 hover:underline hover:underline-offset-8">
        <CustomLink to="/portefolio" text="Portefólio" />
      </li>
      <li className="hover:text-yellow-500 hover:underline hover:underline-offset-8">
        <CustomLink to="/servicos" text="Serviços" />
      </li>
      <li className=" hover:text-yellow-500 hover:underline hover:underline-offset-8">
        <CustomLink to="/contactos" text="Contactos" />
      </li>
    </ul>
  );
};
