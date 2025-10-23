import dotenv from 'dotenv'

dotenv.config()

enum DATABASEPARAMS {
    HOST = "HOST",
    PORT = 'PORT',
    USERNAME = 'USERNAME',
    PASSWORD = 'PASSWORD',
    DATABASE = 'DATABASE',
    SERVER_PORT = 'SERVER_PORT',
    MONGO_URI = 'MONGO_URI'
}

const getenv = (env: DATABASEPARAMS) => {
    const foundenv = process.env[env]
    if (!foundenv) {
        throw new Error(`environment variable not found` )
    }
    return foundenv
}

export const databaseConfig = {
    // HOST : getenv(DATABASEPARAMS.HOST),
    // PORT : getenv(DATABASEPARAMS.PORT),
    // USERNAME : getenv(DATABASEPARAMS.USERNAME),
    // PASSWORD : getenv(DATABASEPARAMS.PASSWORD),
    // DATABASE : getenv(DATABASEPARAMS.DATABASE),
    SERVER_PORT: getenv(DATABASEPARAMS.SERVER_PORT),
    MONGO_URI: getenv(DATABASEPARAMS.MONGO_URI)
}