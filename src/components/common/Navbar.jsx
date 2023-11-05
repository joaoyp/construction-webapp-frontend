import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export const Navbar = () => {

  return (  
    <>
      <nav className="flex items-center p-4 mr-60 w-auto">
        <ul className="flex justify-center gap-8 h-20 items-center ">
          <li className="hover:text-yellow-500">
            <Link to="/sobre">
              <Typography fontFamily={"alice"} fontSize={20}>Empresa</Typography>
            </Link>
          </li>
          <li className="hover:text-yellow-500">
            <Link to="/galeria">
              <Typography fontFamily={"alice"} fontSize={20}>Galeria</Typography>
            </Link>
          </li>
          <li className="hover:text-yellow-500">
            <Link to="/servicos">
              <div className="flex items-center">
                <Typography fontFamily={"alice"} fontSize={20}>Serviços</Typography>
                <ArrowDropDownIcon />
              </div>
            </Link>
          </li>
          <li className="hover:text-yellow-500">
            <Link to="/contactos">
            <div className="flex items-center">
                <Typography fontFamily={"alice"} fontSize={20}>Contactos</Typography>
                <ArrowDropDownIcon />
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
