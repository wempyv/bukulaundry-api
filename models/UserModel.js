import { Sequelize } from 'sequelize';
import db from '../config/Database.js';

const { DataTypes } = Sequelize;

const users = db.define('users', {
    name: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    address: {
        type: DataTypes.STRING
    },
    whatsapp_number: {
        type: DataTypes.INTEGER
    },
    price_wash_rubbing: {
        type: DataTypes.INTEGER
    },
    price_rubbing: {
        type: DataTypes.INTEGER
    },
    price_wash: {
        type: DataTypes.INTEGER
    },
    service_fee: {
        type: DataTypes.INTEGER
    },
    refresh_token: {
        type: DataTypes.TEXT
    }
}, {
    freezeTableName: true
})

export default users