import { Typography } from "@mui/material";
import { Navbar } from "../common/Navbar";
import HandymanIcon from "@mui/icons-material/Handyman";
import { Link } from "react-router-dom";
import Logo from "../../resources/logo.png";
import { useEffect } from "react";

export const Header = () => {

  return (
    <>
      <header className="z-10 flex top-0 sticky w-full h-24 bg-white justify-between">
        <div className="flex items-center gap-5 ml-60 mr-40">
          <Link to="/">
            <img className="h-auto w-auto" src={Logo} alt="logo" />
          </Link>
        </div>
        <Navbar />
      </header>
    </>
  );
};
