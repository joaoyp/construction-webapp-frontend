import { Typography } from "@mui/material";

export const Lettering = ({ text, onClick, fontSize, variant, component, color, fontWeight }) => {
  return (
    <Typography
      variant={variant}
      component={component}
      fontFamily={"alice"}
      fontSize={fontSize}
      color={color}
      onClick={onClick}
      fontWeight={fontWeight}
    >
      {text}
    </Typography>
  );
};
