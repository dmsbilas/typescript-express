"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const route_pond_management_1 = __importDefault(require("./route.pond-management"));
const route_fish_management_1 = __importDefault(require("./route.fish-management"));
const registeredRouters = express_1.default.Router();
registeredRouters.use("/pond", route_pond_management_1.default);
registeredRouters.use("/fish", route_fish_management_1.default);
module.exports = registeredRouters;
//# sourceMappingURL=register-routing-files.js.map