import * as pg from 'pg';
import { Sequelize } from 'sequelize';

export default new Sequelize("postgres://default:************@ep-green-heart-a4jmt5ia.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require", {
    dialectModule: pg
});