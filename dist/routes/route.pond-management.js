"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const pondManagementRouter = express_1.default.Router();
pondManagementRouter.get("/", (req, res, next) => {
    res.send("I am from pond management ");
});
module.exports = pondManagementRouter;
//# sourceMappingURL=route.pond-management.js.map