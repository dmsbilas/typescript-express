"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const register_routing_files_1 = __importDefault(require("./routes/register-routing-files"));
const app = express_1.default();
const port = 3000; // default port to listen
// define a route handler for the default home page
app.use("/", register_routing_files_1.default);
// start the Express server
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map