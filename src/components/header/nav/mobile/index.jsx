import { Link } from "react-router-dom";
import menus from "~/utils/menus";
import { motion } from "framer-motion";
const MobileNavbar = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      className="flex flex-col pt-40 items-center gap-10 absolute bg-gray-900 h-full w-full z-10 overflow-hidden"
    >
      {menus.map((item) => (
        <Link to={item.path} key={item.path}>
          <div className="text-xl font-bold hover:tracking-widest transition-all">
            {item.name}
          </div>
        </Link>
      ))}
    </motion.div>
  );
};
export default MobileNavbar;
