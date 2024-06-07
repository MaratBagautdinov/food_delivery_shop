
import S3Client from 'easy-yandex-s3';
S3Client.suppress = true

export default new S3Client({
    auth:{
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
    region: 'ru-central1-b',
    Bucket: "food-shop"
});