import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export const PrimaryButton = ({
  variant,
  size,
  text,
  color,
  bgcolor,
  hoverBgColor,
  hoverColor,
  fontFamily,
  onClick,
  to,
  type
}) => {
  return (
    <Link to={to}>
      <Button
        type={type}
        onClick={onClick}
        variant={variant}
        size={size}
        sx={{
          "&:hover": {
            backgroundColor: hoverBgColor,
            color: hoverColor,
          },
          borderRadius: 5,
          color: color,
          bgcolor: bgcolor,
          fontFamily: fontFamily,
        }}
      >
        {text}
      </Button>
    </Link>
  );
};
