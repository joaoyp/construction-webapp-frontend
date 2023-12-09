import { Intro } from "../Footer/Intro";
import { Menu } from "../Footer/Menu";
import { ContactUs } from "../Footer/ContactUs";
export const Footer = () => {
  return (
    <footer className="max-xl:flex-wrap max-xl:h-full bg-neutral-800 text-white flex gap-2 justify-between pl-20 pr-20 pt-6 w-full h-80 mt-auto">
      <Intro />
      <Menu />
      <ContactUs />
    </footer>
  );
};
