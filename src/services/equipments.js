import { get } from "~/utils/request";
export const getEquipments = () => get("https://api.alisen.me/equipments");
