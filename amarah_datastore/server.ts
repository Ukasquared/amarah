import { databaseSetup } from "./config/database";
import { express_app } from "./config/express";
import express from 'express';



(async () => {
    const app = express();
    express_app(app)

    
})()