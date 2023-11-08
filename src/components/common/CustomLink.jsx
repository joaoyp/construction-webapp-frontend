import { Lettering } from "./Lettering";
import { NavLink } from "react-router-dom";

export const CustomLink = ({ to, text, fontSize }) => {
  return (
    <NavLink to={to}>
      <Lettering text={text} fontSize={fontSize ? fontSize : 20} />
    </NavLink>
  );
};
