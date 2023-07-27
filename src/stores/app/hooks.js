import { useSelector } from "react-redux";

export const useMobileNavbarVisible = () =>
  useSelector((state) => state.app.mobileNavbarVisible);
