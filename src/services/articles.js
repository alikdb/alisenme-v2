import { get } from "~/utils/request";

export const getArticles = () => get("https://api.alisen.me/articles");
