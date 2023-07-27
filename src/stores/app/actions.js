import store from "..";
import { _setMobileNavbarVisible } from ".";

export const setMobileNavbarVisible = (visible) =>
  store.dispatch(_setMobileNavbarVisible(visible));
