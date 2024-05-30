import { DataTypes, Model } from 'sequelize';
import sequelize from '../sequelize';
import type { T_Subdivision } from '~/types';

export default sequelize.define<Model<T_Subdivision>>('User', {
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
    }
});
