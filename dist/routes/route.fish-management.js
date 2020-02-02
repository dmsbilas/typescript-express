"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const fishManagementRoute = express_1.default.Router();
fishManagementRoute.get("/", (req, res, next) => {
    res.send("I am from fish management Route");
});
module.exports = fishManagementRoute;
//# sourceMappingURL=route.fish-management.js.map