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
          <div className="bg-hero bg-cover bg-fixed w-full h-screen"></div>
          <div className="absolute inset-0 flex items-center text-white text-4xl font-bold justify-center bg-opacity-40 bg-black">
            <Container
              maxWidth="sm"
              className="text-center relative text-white flex items-center"
            >
              <Typography variant="h2" component="h1" gutterBottom>
                Pedro e Agostinho{" "}
                <span className="text-yellow-500">
                  Construções e Remodelações
                </span>
              </Typography>
              <Typography variant="h5" gutterBottom>
                Peça já o seu orçamento grátis!
              </Typography>
            </Container>
          </div>
        </div>
        <div id="white" className="h-80 bg-white"></div>
        <div id="teal" className="h-80 bg-hero2 bg-cover bg-fixed"></div>
        <div id="white" className="h-screen bg-white"></div>
      </main>
    </>
  );
};
