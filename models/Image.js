import { Sequelize } from 'sequelize';
import db from '../config/Database.js';

const { DataTypes } = Sequelize;

const file = db.define('file', {
    transaction_id: {
        type: DataTypes.INTEGER
    },
    image: {
        type: DataTypes.STRING
    }
})

export default file;