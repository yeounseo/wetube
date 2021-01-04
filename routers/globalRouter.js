import express from "express";
import routes from "../routes";
import { join, login, logout } from "../controllers/userController";
import { homeController, search } from "../controllers/videoController";

const globalRouter = express.Router();

globalRouter.get(routes.home, homeController);
globalRouter.get(routes.join, join);
globalRouter.get(routes.login, login);
globalRouter.get(routes.logout, logout);
globalRouter.get(routes.search, search);

export default globalRouter;
