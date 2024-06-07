import {File} from "~/types"
import s3Client from "~/server/api/files/s3-client";


export default defineEventHandler<Promise<string>>(async (event) => {
    const body = await readBody<{ file: File }>(event)

    const fileName = await s3Client.Upload({
        buffer: Buffer.from(body.file.content.replace(/^data:image\/\w+;base64,/, ""),'base64'),
        name: body.file.name,
        save_name: false
    }, '/products')

    return fileName.Location ?? fileName
})
