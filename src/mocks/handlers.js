import { equipments } from "~/fake-api";
import { rest } from "msw";

export const handlers = [
  rest.get("https://api.alisen.me/equipments", (req, res, ctx) =>
    res(ctx.delay(1500), ctx.status(200), ctx.json(equipments))
  ),
];
