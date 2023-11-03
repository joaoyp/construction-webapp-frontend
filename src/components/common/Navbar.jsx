import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export const Navbar = () => {
  return (
    <>
      <nav className="flex items-center p-4 mr-8">
        <ul className="flex justify-center gap-8 h-20 items-center">
          <li>
            <Link to="/sobre">
              <Typography fontSize={20}>Sobre Nós</Typography>
            </Link>
          </li>
          <li>
            <Link to="/galeria">
              <Typography fontSize={20}>Galeria</Typography>
            </Link>
          </li>
          <li>
            <Link to="/contactos">
              <Typography fontSize={20}>Contactos</Typography>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
