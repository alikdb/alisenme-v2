import { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import NavbarItem from "./item";
import { setMobileNavbarVisible } from "~/stores/app/actions";
import menus from "~/utils/menus";
const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const handleMenu = () => {
    setMenuActive(!menuActive);
    setMobileNavbarVisible(!menuActive);
  };

  return (
    <>
      <nav className="hidden md:flex gap-x-2.5 ">
        {menus.map((item) => (
          <NavbarItem key={item.path} item={item} />
        ))}
      </nav>
      <div>
        <HiOutlineMenuAlt3
          size={30}
          className="cursor-pointer"
          onClick={() => handleMenu()}
        />
      </div>
    </>
  );
};

export default Navbar;
