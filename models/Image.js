import { Sequelize } from 'sequelize';
import db from '../config/Database.js';

const { DataTypes } = Sequelize;

const Image = db.define('image', {
    transaction_id: {
        type: DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING
    },
    data: {
        type: DataTypes.BLOB('long')
    }
})

export default Image;