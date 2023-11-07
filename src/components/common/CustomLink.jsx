import { Lettering } from "./Lettering";
import { NavLink } from "react-router-dom";

export const CustomLink = ({ to, text }) => {
  return (
    <NavLink to={to}>
      <Lettering text={text} fontSize={20} />
    </NavLink>
  );
};
