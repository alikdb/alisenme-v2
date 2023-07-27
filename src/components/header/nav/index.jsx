import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import NavbarItem from "./item";
import { setMobileNavbarVisible } from "~/stores/app/actions";
import { useMobileNavbarVisible } from "~/stores/app/hooks";
import menus from "~/utils/menus";
const Navbar = () => {
  const navbarVisible = useMobileNavbarVisible();

  const handleMenu = (status) => {
    //setMenuActive(!menuActive);
    setMobileNavbarVisible(status);
  };

  return (
    <>
      <nav className="hidden md:flex gap-x-2.5 ">
        {menus.map((item) => (
          <NavbarItem key={item.path} item={item} />
        ))}
      </nav>
      <div className="block md:hidden">
        {!navbarVisible ? (
          <HiOutlineMenuAlt3
            size={30}
            className="cursor-pointer"
            onClick={() => handleMenu(true)}
          />
        ) : (
          <HiOutlineX
            size={30}
            className="cursor-pointer"
            onClick={() => handleMenu(false)}
          />
        )}
      </div>
    </>
  );
};

export default Navbar;
