import { CustomLink } from "../../common/CustomLink";

export const NavHamburgerMenu = () => {
  return (
    <ul className="xl:hidden bg-white shadow-xl gap-2 border-yellow-500 border-t-2 mt-24 h-fit left-0 top-0 right-0 absolute flex flex-col justify-center items-center pb-4 pt-4">
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
