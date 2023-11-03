import { Typography } from "@mui/material";
import { Navbar } from "../common/Navbar";
import HandymanIcon from "@mui/icons-material/Handyman";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <header className="z-10 flex top-0 sticky w-full h-24 bg-white justify-between">
        <div className="flex items-center gap-5 ml-8">
          <Link to="/">
            <HandymanIcon sx={{ fontSize: 64 }} />
          </Link>
          <Link to="/">
            <Typography fontSize={24}>
              Pedro & Agostinho - Construções
            </Typography>
          </Link>
        </div>
        <Navbar />
      </header>
    </>
  );
};
