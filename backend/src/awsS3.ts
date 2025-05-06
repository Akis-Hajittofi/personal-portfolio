import AWS from 'aws-sdk';

const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
});

// Function to generate a presigned URL
export const getPresignedUrl = (bucket: string, key: string, expires: number = 900): string => {
    const params = {
        Bucket: bucket,
        Key: key,
        Expires: expires, // URL expiration time in seconds
    };

    try {
        const url = s3.getSignedUrl('getObject', params);
        return url;
    } catch (error) {
        console.error(`Error generating presigned URL for ${key}:`, error);
        throw error;
    }
};

export default s3;