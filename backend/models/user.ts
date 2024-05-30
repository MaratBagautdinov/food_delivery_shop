import { DataTypes, Model } from 'sequelize';
import sequelize from '../sequelize';
import type { T_User } from '~/types';

export default sequelize.define<Model<T_User>>('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
});
