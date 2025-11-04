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
exports.getDb = void 0;
exports.runMongoConnection = runMongoConnection;
const mongodb_1 = require("mongodb");
const _1 = require(".");
const uri = _1.databaseConfig.MONGO_URI;
let database;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new mongodb_1.MongoClient(uri, {
    serverApi: {
        version: mongodb_1.ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});
function runMongoConnection() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Connect the client to the server	(optional starting in v4.7)
            yield client.connect();
            // Send a ping to confirm a successful connection
            database = client.db("amara_db");
            yield database.command({ ping: 2 });
            console.log("Pinged your deployment. You successfully connected to MongoDB!");
            return database;
        }
        finally {
            // Ensures that the client will close when you finish/error
            // await client.close();
        }
    });
}
const getDb = () => database;
exports.getDb = getDb;
