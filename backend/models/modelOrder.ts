import { DataTypes, Model } from 'sequelize';
import sequelize from '../sequelize';
import type { T_Order } from '~/types';

export default sequelize.define<Model<T_Order>>('Orders', {
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
    user_id: {
        type: DataTypes.STRING,
        allowNull: false
    },
    items_ids: {
        type: DataTypes.ARRAY(DataTypes.INTEGER),
        allowNull: false
    },
    items: {
        type: DataTypes.ARRAY(DataTypes.JSON),
        allowNull: false
    },
    sum: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    addres: {
        type: DataTypes.JSON,
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
    },
});
