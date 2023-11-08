import { CustomLink } from "../../common/CustomLink";

export const Navbar = () => {
  return (
    <nav className="flex items-center p-4 mr-40 w-auto">
      <ul className="flex justify-center gap-8 h-20 items-center">
        <li className="hover:text-yellow-500 hover:underline hover:underline-offset-8">
          <CustomLink to="/sobre" text="Sobre Nós" />
        </li>
        <li className="hover:text-yellow-500 hover:underline hover:underline-offset-8">
          <CustomLink to="/portefolio" text="Portefólio" />
        </li>
        <li className="peer/services hover:text-yellow-500 hover:underline hover:underline-offset-8">
          <CustomLink to="/servicos" text="Serviços" />
        </li>
        <li className="peer/contacts hover:text-yellow-500 hover:underline hover:underline-offset-8">
          <CustomLink to="/contactos" text="Contactos" />
        </li>
      </ul>
    </nav>
  );
};
