import { Typography } from "@mui/material";

export const Banner = ({ text }) => {
  return (
    <div className="w-full h-64 bg-neutral-800 flex justify-center items-center">
      <Typography variant="h2" color="white" fontFamily={"alice"}>
        {text}
      </Typography>
    </div>
  );
};
