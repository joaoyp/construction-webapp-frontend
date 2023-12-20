import { Navbar } from "./Navbar";
import LogoAlt from "../../../resources/logo_alt.png";
import { NavLink } from "react-router-dom";
import { scrollToTop } from "../../../functions/scrollToTop";

export const Header = () => {
  return (
    <header className="z-10 shadow-sm shadow-neutral-600 flex top-0 sticky w-full h-24 bg-white justify-between">
      <div className="flex items-center gap-5 relative">
        <NavLink onClick={scrollToTop} to="/" className="ml-40 max-xl:ml-0">
          <img
            src={LogoAlt}
            alt="logo"
          />
        </NavLink>
      </div>
      <Navbar />
      {/* <Language /> */}
    </header>
  );
};
