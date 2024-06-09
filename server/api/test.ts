import sequelize from "~/backend/sequelize"

export default defineEventHandler<string>(() => {
    return sequelize.query('UPDATE "Users" SET "phone" = 70000000000')
})