import { Typography, Container } from "@mui/material";
import { PrimaryButton } from "../../common/PrimaryButton";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { Lettering } from "../../common/Lettering";

export const Hero = ({ scrollTo }) => {
  return (
    <section id="hero" className="relative">
      <div className="bg-hero bg-cover bg-fixed w-full real-screen"></div>
      <div className="absolute inset-0 flex items-center text-white text-4xl font-bold justify-center bg-opacity-40 bg-black">
        <Container
          maxWidth="sm"
          className="text-center relative text-white flex items-center"
        >
          <Typography
            color="orange"
            fontFamily="Alice"
            variant="h2"
            component="h1"
          >
            Pedro e Agostinho{" "}
          </Typography>

          <Typography
            color="white"
            fontFamily="Alice"
            variant="h4"
            component="h2"
          >
            Construções e Remodelações
          </Typography>

          <div className="mt-10">
            <PrimaryButton
              bgcolor="orange"
              color="white"
              hoverBgColor="white"
              hoverColor="orange"
              size="large"
              variant="contained"
              text="Peça um orçamento"
              fontFamily="Alice"
            />
          </div>
        </Container>
        <div className="absolute bottom-0 mb-12">
          <div
            onClick={() => scrollTo("about-us")}
            className="cursor-pointer hover:bg-neutral-200 rounded-full w-14 h-14 bg-white flex items-center justify-center"
          >
            <ArrowDownwardIcon sx={{ color: "orange" }} fontSize="large" />
          </div>
        </div>
        <div className="absolute bottom-0 mb-4">
          <Lettering text="Saiba Mais" />
        </div>
      </div>
    </section>
  );
};
