import { Typography } from "@mui/material";
import { Lettering } from "../../common/Lettering";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

export const ContactUs = () => {
  return (
    <div className="max-xl:items-center max-xl:pl-0 max-xl:mb-4 w-full flex flex-col pl-28">
      <div>
        <Typography color="orange" fontFamily="Alice" fontSize={32}>
          Contacte-nos
        </Typography>
      </div>
      <div className="mt-2">
        <Lettering text="Para mais informações e/ou questões, contacte:" />
      </div>
      <div className="flex mt-6 gap-4 hover:text-yellow-500 hover:cursor-pointer">
        <EmailIcon />
        <a
          className="underline underline-offset-4"
          href="mailto:pa-construcoes@gmail.com?subject=Informações"
        >
          <Lettering text="pa-construcoes@gmail.com" />
        </a>
      </div>
      <div className="flex mt-2 gap-4">
        <PhoneIcon />
        <Lettering text="966420506 / 96xxxxxxx" />
      </div>
    </div>
  );
};
