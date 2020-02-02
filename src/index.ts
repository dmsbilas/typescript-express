import express from "express";
import path from "path";
import registeredRouters  from "./routes/register-routing-files";
const app = express();
const port = 3000; // default port to listen

// define a route handler for the default home page
app.use("/", registeredRouters);

// start the Express server
app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
} );