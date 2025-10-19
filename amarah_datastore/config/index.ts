import dotenv from 'dotenv'

dotenv.config()

enum DATABASEPARAMS {
    HOST = "HOST",
    PORT = 'PORT',
    USERNAME = 'USERNAME',
    PASSWORD = 'PASSWORD',
    DATABASE = 'DATABASE'
}

const getenv = (env: DATABASEPARAMS) => {
    const foundenv = process.env[env]
    if (!foundenv) {
        throw new Error('environment variable not found')
    }
    return foundenv
}

export const databaseConfig = {
    HOST : getenv(DATABASEPARAMS.HOST),
    PORT : getenv(DATABASEPARAMS.PORT),
    USERNAME : getenv(DATABASEPARAMS.USERNAME),
    PASSWORD : getenv(DATABASEPARAMS.PASSWORD),
    DATABASE : getenv(DATABASEPARAMS.DATABASE)
}