import { Button } from "@mui/material";

export const PrimaryButton = ({variant, size, text, bgcolor, fontFamily}) => {
    return (
      <Button variant={variant} size={size} sx={{
        bgcolor:bgcolor,
        fontFamily:fontFamily
      }}>
        {text}
      </Button>
    );
  };
  