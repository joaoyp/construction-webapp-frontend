import { Button } from "@mui/material";

export const PrimaryButton = ({
  variant,
  size,
  text,
  color,
  bgcolor,
  hoverBgColor,
  hoverColor,
  fontFamily,
}) => {
  return (
    <Button
      variant={variant}
      size={size}
      sx={{
        "&:hover": {
          backgroundColor: hoverBgColor,
          color: hoverColor,
        },
        color: color,
        bgcolor: bgcolor,
        fontFamily: fontFamily,
      }}
    >
      {text}
    </Button>
  );
};
