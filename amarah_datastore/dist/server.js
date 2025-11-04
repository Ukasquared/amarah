"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config");
const express_1 = require("./config/express");
const express_2 = __importDefault(require("express"));
const database_1 = require("./config/database");
const repository_1 = require("./repository");
(() => __awaiter(void 0, void 0, void 0, function* () {
    const app = (0, express_2.default)();
    (0, express_1.express_app)(app);
    yield (0, database_1.runMongoConnection)();
    console.log('app started');
    app.get('/', (req, res) => {
        res.send({ server: 'server is running' });
    });
    app.post('/book-a-quotation', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const user = new repository_1.User();
        const newUser = yield user.createUser(req.body);
        if (!user) {
            throw new Error('unable to book quotation');
        }
        console.log(newUser);
        res.send({ message: 'you have successfully booked a quotation' });
    }));
    console.log('app continues running');
    app.listen(config_1.databaseConfig.SERVER_PORT, () => {
        console.log('app is listening on port ' + config_1.databaseConfig.SERVER_PORT);
    });
}))();
