import { useEffect } from "react";
import { Container } from "@mui/material";
import { Typography } from "@mui/material";

export const LandingPage = () => {
  useEffect(() => {
    document.title = "PA - Construções | Início";
  }, []);

  return (
    <>
      <main>
        <div id="hero" className="relative">
          <div className="bg-hero bg-cover w-full h-screen"></div>
          <div className="absolute inset-0 flex items-center text-white text-4xl font-bold justify-center bg-opacity-60 bg-black"></div>
        </div>
      </main>
    </>
  );
};
