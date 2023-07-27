import { useEffect } from "react";
import Navbar from "./nav";
import { Link } from "react-router-dom";
import Typed from "react-typed";
import { useMobileNavbarVisible } from "~/stores/app/hooks";
import MobileNavbar from "./nav/mobile";
import { useLocation } from "react-router-dom";
import { setMobileNavbarVisible } from "~/stores/app/actions";
import { AnimatePresence } from "framer-motion";
export default function Header() {
  const mobileNavbarVisible = useMobileNavbarVisible();
  const location = useLocation();
  useEffect(() => {
    if (mobileNavbarVisible) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }
  }, [mobileNavbarVisible]);
  useEffect(() => {
    setMobileNavbarVisible(false);
  }, [location.pathname]);

  return (
    <header>
      <div className="container mx-auto px-5 py-5">
        <div className="flex items-center justify-between">
          <div>
            <Link to="/" className="flex flex-col">
              <span className="text-xl text-white">Ali Şen</span>
              <span className="text-gray-400 hidden md:block">
                <Typed
                  strings={[
                    "Web Developer",
                    "React Developer",
                    "PHP Developer",
                  ]}
                  typeSpeed={70}
                  backSpeed={60}
                  loop
                />
              </span>
            </Link>
          </div>
          <div>
            <Navbar />
          </div>
        </div>
      </div>
      <AnimatePresence>
        {mobileNavbarVisible ? <MobileNavbar /> : ""}
      </AnimatePresence>
    </header>
  );
}
