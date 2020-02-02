import express from "express";
import pondManagementRoutes from "./route.pond-management";
import fishManagementRoutes from "./route.fish-management";

const registeredRouters = express.Router();

registeredRouters.use("/pond", pondManagementRoutes);
registeredRouters.use("/fish", fishManagementRoutes)

export = registeredRouters ;


