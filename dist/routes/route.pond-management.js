"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const service_pond_management_1 = require("../services/service.pond-management");
const pondManagementRouter = express_1.default.Router();
const pondManagementService = service_pond_management_1.PondManagementService.getInstance();
pondManagementRouter.get("/", (req, res, next) => {
    res.send("I am from pond management ");
});
pondManagementRouter.post("/add", (req, res, next) => {
    // tslint:disable-next-line:no-console
    // console.log(req.body.pondName);
    const pondName = req.body.pondName;
    pondManagementService.addPond("Pond name will come from request").then((response) => {
        res.send(response);
    });
});
module.exports = pondManagementRouter;
//# sourceMappingURL=route.pond-management.js.map