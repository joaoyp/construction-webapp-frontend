import { Typography } from "@mui/material";
import { Lettering } from "../../common/Lettering";
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import { Email } from "@mui/icons-material";

export const ContactUs = () => {
  return (
    <div className="w-1/3 flex flex-col">
        <div>
            <Typography
                color="orange"
                fontFamily="Alice"
                fontSize={32}
            >
                Contacte-nos
            </Typography>
        </div>
        <div className="mt-2">
            <Lettering text="Para mais informações e/ou questões, contacte:"/>
        </div>
        <div className="flex mt-6 gap-4 hover:text-yellow-500 hover:cursor-pointer">
            <EmailIcon />
            <a className="underline underline-offset-4" href="mailto:pa-construcoes@gmail.com?subject=Informações" >
                <Lettering text="pa-construcoes@gmail.com"/>
            </a>
        </div>
        <div className="flex mt-2 gap-4">
            <PhoneIcon />
            <Lettering text="966420506 / 96xxxxxxx"/>
        </div>
    </div>
  );
};


