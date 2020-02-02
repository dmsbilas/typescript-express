import express from "express";
const pondManagementRouter = express.Router();

pondManagementRouter.get("/", (req, res , next) =>{
    res.send("I am from pond management ");
} );




export = pondManagementRouter ;