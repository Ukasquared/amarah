import { Db, Collection } from "mongodb"
import { getDb } from "./config/database"
import { userData } from "./dtos/dto"


export class User {
    private database: Db
    private userCollection: Collection
    
    constructor() {
        this.database = getDb()
        // if collection exist, it doest  not recreate it
        this.userCollection = this.database.collection('users');
        //createCollection method is used with async function
    }

    async createUser (data: userData) {
        return this.userCollection.insertOne(data);
    }
}