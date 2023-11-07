import Portuguese from "../../../resources/images/pt.png";
import English from "../../../resources/images/en.png";
import { Typography } from "@mui/material";

export const Language = () => {
  return (
    <div className="flex items-center mr-20">
      <div className="flex h-1/2">
        <img className="" src={Portuguese} alt="logo" />
        <Typography fontSize={30}></Typography>
        <img className="" src={English} alt="logo" />
      </div>
    </div>
  );
};
