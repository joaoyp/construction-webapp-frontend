import { Navbar } from "./Navbar";
import LogoAlt from "../../../resources/logo_alt.png";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className="z-10 flex top-0 sticky w-full h-24 bg-white justify-between">
      <div className="flex items-center gap-5 relative">
        <NavLink to="/">
          <img
            className="bg-yellow-400 ml-40 max-xl:ml-0"
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
