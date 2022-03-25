import { Sequelize } from 'sequelize';
import db from '../config/Database.js';

const { DataTypes } = Sequelize;

const transactions = db.define('transactions', {
    transaction_unique: {
        type: DataTypes.STRING
    },
    user_id: {
        type: DataTypes.INTEGER
    },
    name_customer: {
        type: DataTypes.STRING
    },
    address: {
        type: DataTypes.STRING
    },
    whatsapp_number: {
        type: DataTypes.STRING
    },
    total_weight: {
        type: DataTypes.INTEGER
    },
    total_bill: {
        type: DataTypes.INTEGER
    },
    status_payment: {
        type: DataTypes.STRING
    },
    type_laundry: {
        type: DataTypes.STRING
    },
    status_laundry: {
        type: DataTypes.STRING
    },
    additional_bill: {
        type: DataTypes.INTEGER
    },
    service: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    status_on_demand: {
        type: DataTypes.STRING
    },
    detail_item: {
        type: DataTypes.JSON
    }
})

export default transactions;