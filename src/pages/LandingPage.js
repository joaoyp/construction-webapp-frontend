import { useEffect } from "react";
import { Container } from "@mui/material";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { PrimaryButton } from "../components/common/PrimaryButton";

export const LandingPage = () => {
  useEffect(() => {
    document.title = "PA - Construções | Início";
  }, []);

  return (
    <>
      <main>
        <div id="hero" className="relative">
          <div className="bg-hero bg-cover bg-fixed w-full real-screen"></div>
          <div className="absolute inset-0 flex items-center text-white text-4xl font-bold justify-center bg-opacity-40 bg-black">
            <Container
              maxWidth="sm"
              className="text-center relative text-white flex items-center"
            >
              <Typography
                fontFamily="Alice"
                variant="h2"
                component="h1"
                gutterBottom
              >
                Pedro e Agostinho{" "}
                <span className="text-yellow-500">
                  Construções e Remodelações
                </span>
              </Typography>
            </Container>
          </div>
        </div>
        <div className="h-[70vh] bg-white"></div>
        <div id="estimate" className="relative">
          <div className="h-80 bg-hero2 bg-cover bg-fixed"></div>
          <div className="absolute inset-0 flex items-center text-white text-4xl font-bold justify-center bg-opacity-40 bg-black">
            <div className="flex flex-col items-center w-full">
              <Typography fontFamily="Alice" variant="h2" component="h1">
                Qualidade e Eficácia
              </Typography>
              <div className="mt-8">
                <Typography fontFamily="Alice" variant="h4" component="h2">
                  Peça já o seu orçamento:
                </Typography>
              </div>
              <div className="mt-6">
                <PrimaryButton
                  bgcolor="orange"
                  size="large"
                  variant="contained"
                  text="Aqui"
                  fontFamily="Alice"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="real-screen"></div>
      </main>
    </>
  );
};
