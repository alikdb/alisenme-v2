import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import cn from "classnames";

const NavbarItem = ({ item }) => {
  const location = useLocation();
  const isActive = location.pathname === item.path;
  return (
    <Link
      className={cn({
        "bg-green-300/50": isActive,
        "px-4 py-1.5 text-base rounded-md": true,
      })}
      to={item.path}
    >
      {item.name}
    </Link>
  );
};

export default NavbarItem;
