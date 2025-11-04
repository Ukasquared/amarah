"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseConfig = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var DATABASEPARAMS;
(function (DATABASEPARAMS) {
    DATABASEPARAMS["HOST"] = "HOST";
    DATABASEPARAMS["PORT"] = "PORT";
    DATABASEPARAMS["USERNAME"] = "USERNAME";
    DATABASEPARAMS["PASSWORD"] = "PASSWORD";
    DATABASEPARAMS["DATABASE"] = "DATABASE";
    DATABASEPARAMS["SERVER_PORT"] = "SERVER_PORT";
    DATABASEPARAMS["MONGO_URI"] = "MONGO_URI";
})(DATABASEPARAMS || (DATABASEPARAMS = {}));
const getenv = (env) => {
    const foundenv = process.env[env];
    if (!foundenv) {
        throw new Error(`environment variable not found`);
    }
    return foundenv;
};
exports.databaseConfig = {
    // HOST : getenv(DATABASEPARAMS.HOST),
    // PORT : getenv(DATABASEPARAMS.PORT),
    // USERNAME : getenv(DATABASEPARAMS.USERNAME),
    // PASSWORD : getenv(DATABASEPARAMS.PASSWORD),
    // DATABASE : getenv(DATABASEPARAMS.DATABASE),
    SERVER_PORT: getenv(DATABASEPARAMS.SERVER_PORT),
    MONGO_URI: getenv(DATABASEPARAMS.MONGO_URI)
};
