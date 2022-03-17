import { Sequelize } from "sequelize";

const db = new Sequelize('db_bukulaundry', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

export default db;