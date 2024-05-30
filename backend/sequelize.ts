import { Sequelize } from 'sequelize';

export default new Sequelize(
    'postgres',
    'postgres',
    'postgres',
    {
        port: 5432,
        host: '127.127.126.49',
        dialect: 'postgres',
    }
);
