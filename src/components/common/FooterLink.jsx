import { Lettering } from "./Lettering";
import { Link } from "react-router-dom";

export const FooterLink = ({ to, text, fontSize, onClick }) => {
  return (
    <Link onClick={onClick} to={to}>
      <Lettering text={text} fontSize={fontSize ? fontSize : 20} />
    </Link>
  );
};
