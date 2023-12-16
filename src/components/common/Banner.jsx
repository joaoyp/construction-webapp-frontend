//DEPRECATED

import { Typography } from "@mui/material";

export const Banner = ({ text }) => {
  return (
    <div className="text-center w-full h-40 bg-bannerAbout bg-cover bg-no-repeat bg-middle bg-fixed flex justify-center items-center">
      <div>
        <Typography
          variant="h1"
          style={{ color: "rgba(255, 255, 255, 0.9)" }}
          fontFamily={"alice"}
        >
          {text}
        </Typography>
      </div>
    </div>
  );
};

//Simple
/*
<div className="w-full h-64 bg-neutral-800 flex justify-center items-center">
      <Typography variant="h2" color="white" fontFamily={"alice"}>
        {text}
      </Typography>
    </div>
*/

//Gradient
/* 
<div className="w-full h-64 relative bg-neutral-800">
      <div className="w-full h-64 absolute top-0 left-0 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-700 flex justify-center items-center">
        <Typography variant="h2" fontWeight="bold" fontFamily={"alice"}>
          {text}
        </Typography>
      </div>
    </div>
*/
