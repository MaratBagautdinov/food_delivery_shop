import { DataTypes, Model } from 'sequelize';
import sequelize from '../sequelize';
import type { T_ProductDB } from '~/types';

export default sequelize.define<Model<T_ProductDB>>('Products', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    slug: {
        type: DataTypes.STRING,
        allowNull: false
    },
    catalog_id: {
        type: DataTypes.STRING,
        allowNull: false
    },
    checked: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    variants: DataTypes.TEXT,
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
    },
});
