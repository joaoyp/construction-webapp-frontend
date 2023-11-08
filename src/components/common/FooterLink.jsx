import { Lettering } from "./Lettering";
import { Link } from "react-router-dom";

export const FooterLink = ({ to, text, fontSize }) => {
  return (
    <Link to={to}>
      <Lettering text={text} fontSize={fontSize ? fontSize : 20} />
    </Link>
  );
};
