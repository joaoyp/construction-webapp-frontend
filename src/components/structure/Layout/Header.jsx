import { Navbar } from "./Navbar";
import LogoAlt from "../../../resources/logo_alt.png";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scrollToTop } from "../../../functions/scrollToTop";
import { NavLink } from "react-router-dom";

export const Header = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    scrollToTop();
  }, [pathname]);

  return (
    <header className="z-10 flex top-0 sticky w-full h-24 bg-white justify-between">
      <div className="flex items-center gap-5 ml-40 mr-40">
        <NavLink to="/#">
          <img className="h-auto w-auto" src={LogoAlt} alt="logo" />
        </NavLink>
      </div>
      <Navbar />
      {/* <Language /> */}
    </header>
  );
};
