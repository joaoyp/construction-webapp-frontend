import { Intro } from "../Footer/Intro";
import { Menu } from "../Footer/Menu";
import { ContactUs } from "../Footer/ContactUs";
export const Footer = () => {
  return (
    <footer className="bg-neutral-800 text-white flex gap-2 justify-between pl-20 pr-20 pt-6 w-full min-h-72 mt-auto">
      <Intro />
      <Menu />
      <ContactUs />
    </footer>
  );
};
