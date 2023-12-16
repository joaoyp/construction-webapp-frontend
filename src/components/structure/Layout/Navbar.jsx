import MenuIcon from "@mui/icons-material/Menu";
import { NavMenu } from "./NavMenu";
import { useDispatch, useSelector } from "react-redux";
import { NavHamburgerMenu } from "./NavHamburgerMenu";
import { toggleMenu } from "../../../redux/slices/menuSlice";

export const Navbar = () => {
  const isMenuOpen = useSelector((state) => state.menu.value);
  const dispatch = useDispatch();

  return (
    <nav className="flex justify-center items-center p-4 mr-40 max-xl:mr-0">
      <div
        onClick={() => {
          dispatch(toggleMenu());
        }}
        className="xl:hidden cursor-pointer"
      >
        <MenuIcon fontSize="large" />
      </div>
      {isMenuOpen ? <NavHamburgerMenu /> : null}
      <NavMenu />
    </nav>
  );
};
