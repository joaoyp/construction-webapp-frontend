import { NavLink } from "react-router-dom";
import { Hashlink, NavHashLink } from "react-router-hash-link";
import { Lettering } from "./Lettering";

export const CustomLink = ({ to, text }) => {
  return (
    <NavHashLink to={to}>
      <Lettering text={text} fontSize={20} />
    </NavHashLink>
  );
};
