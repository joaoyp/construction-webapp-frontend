import { Navbar } from "./Navbar";
import { Link } from "react-router-dom";
import LogoAlt from "../../../resources/logo_alt.png";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scrollToTop } from "../../../functions/scrollToTop";
import { NavHashLink } from "react-router-hash-link";

export const Header = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    scrollToTop();
  }, [pathname]);

  return (
    <header className="z-10 flex top-0 sticky w-full h-24 bg-white justify-between">
      <div className="flex items-center gap-5 ml-40 mr-40">
        <NavHashLink to="/#">
          <img className="h-auto w-auto" src={LogoAlt} alt="logo" />
        </NavHashLink>
      </div>
      <Navbar />
      {/* <Language /> */}
    </header>
  );
};
