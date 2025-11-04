import { Application, json, } from "express";
import cors from 'cors'


export const express_app = async (app: Application) => {
    app.use(json())
    // Use the cors middleware
// Configure to allow requests from your origin
    app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
    }));

}