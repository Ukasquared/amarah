import { Application, json } from "express";


export const express_app = async (app: Application) => {
    app.use(json)
}