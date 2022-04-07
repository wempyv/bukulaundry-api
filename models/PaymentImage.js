import { Sequelize } from 'sequelize';
import db from '../config/Database.js';

const { DataTypes } = Sequelize;

const PaymentImage = db.define('payment_images', {
    transaction_id: {
        type: DataTypes.INTEGER
    },
    type: {
        type: DataTypes.STRING
    },
    name: {
        type: DataTypes.STRING
    },
    data: {
        type: DataTypes.BLOB('long')
    }
}, {
    freezeTableName: true
})

export default PaymentImage