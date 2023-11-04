import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export const Navbar = () => {
  return (
    <>
      <nav className="flex items-center p-4 mr-60 w-auto">
        <ul className="flex justify-center gap-8 h-20 items-center ">
          <li className="hover:text-yellow-500 ">
            <Link to="/sobre">
              <Typography fontSize={20}>Empresa</Typography>
            </Link>
          </li>
          <li className="hover:text-yellow-500">
            <Link to="/galeria">
              <Typography fontSize={20}>Galeria</Typography>
            </Link>
          </li>
          <li className="hover:text-yellow-500">
            <Link to="/servicos">
              <div className="flex items-center">
                <Typography fontSize={20}>Serviços</Typography>
                <ArrowDropDownIcon />
              </div>
            </Link>
          </li>
          <li className="hover:text-yellow-500">
            <Link to="/contactos">
              <Typography fontSize={20}>Contactos</Typography>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
