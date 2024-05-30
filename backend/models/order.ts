import { DataTypes, Model } from 'sequelize';
import sequelize from '../sequelize';
import type { T_Order } from '~/types';

export default sequelize.define<Model<T_Order>>('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    status_id: {
        type: DataTypes.STRING,
        allowNull: false
    },
    user: {
        type: DataTypes.STRING,
        allowNull: false
    },
    items_ids: {
        type: DataTypes.ARRAY,
        allowNull: false
    },
    items: {
        type: DataTypes.ARRAY,
        allowNull: false
    },
    sum: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    addres: {
        type: DataTypes.STRING,
        allowNull: false
    }
});
