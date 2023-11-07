import { Typography } from "@mui/material";

export const Lettering = ({ text, fontSize, variant, component }) => {
  return (
    <Typography
      variant={variant}
      component={component}
      fontFamily={"alice"}
      fontSize={fontSize}
    >
      {text}
    </Typography>
  );
};
