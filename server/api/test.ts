import sequelize from "~/backend/sequelize"

export default defineEventHandler<string>(() => {
    // return sequelize.query('UPDATE "Users" SET "phone" = 71111111111 WHERE "id" =2')
    return "<h1>API</h1>"
})