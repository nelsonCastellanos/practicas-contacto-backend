import { Dialect, Sequelize } from 'sequelize'
import 'dotenv/config'

const dbName = process.env.DB_NAME as string
const dbUser = process.env.DB_USER as string
const dbHost = process.env.DB_HOST
const dbPORT = process.env.DB_PORT as string
const dbDriver = process.env.DB_DRIVER as Dialect
const dbPassword = process.env.DB_PASSWORD

const sequelizeConnection = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  dialect: dbDriver,
  port: Number.parseInt(dbPORT) 
})

export default sequelizeConnection