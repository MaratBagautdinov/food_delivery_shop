import { Sequelize } from 'sequelize';
import pg from 'pg'
export default new Sequelize(
    process.env.POSTGRES_DATABASE,
    process.env.POSTGRES_USER,
    process.env.POSTGRES_PASSWORD,
    {
        port: 5432,
        host: process.env.POSTGRES_HOST,
        dialect: 'postgres',
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        },
        dialectModule: pg
    },
);
