import { Sequelize } from 'sequelize';
import db from '../config/Database.js';

const { DataTypes } = Sequelize;

const customers = db.define('customers', {
    user_id: {
        type: DataTypes.INTEGER
    },
    name_customer: {
        type: DataTypes.STRING
    },
    whatsapp_number: {
        type: DataTypes.STRING
    },
    address: {
        type: DataTypes.STRING
    },
})


export default customers;