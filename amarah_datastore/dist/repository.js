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
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const database_1 = require("./config/database");
class User {
    constructor() {
        this.database = (0, database_1.getDb)();
        // if collection exist, it doest  not recreate it
        this.userCollection = this.database.collection('users');
        //createCollection method is used with async function
    }
    createUser(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.userCollection.insertOne(data);
        });
    }
}
exports.User = User;
