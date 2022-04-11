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
    id_laundry: {
        type: DataTypes.STRING
    },
    address: {
        type: DataTypes.STRING
    },
    whatsapp_number: {
        type: DataTypes.STRING
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
    },
    payment_method: {
        type: DataTypes.JSON,
        defaultValue: []
    }
}, {
    freezeTableName: true
})

export default users