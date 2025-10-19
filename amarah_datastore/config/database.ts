import { DataSource } from "typeorm"
import { databaseConfig } from "."

const AppDataSource = new DataSource({
type: "postgres",
host: databaseConfig.HOST,
port: parseInt(databaseConfig.PORT),
username: databaseConfig.USERNAME,
password: databaseConfig.PASSWORD,
database: databaseConfig.DATABASE,
})


export const databaseSetup = async () => {
    try {
        await AppDataSource.initialize()
        console.log("Data Source has been initialized!")
    } catch (error) {
        console.error("Error during Data Source initialization", error)
    }
}
