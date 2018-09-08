import AWS from "aws-sdk";

const R = new AWS.Rekognition(),
  S3 = new AWS.S3();

export const handler = async (event, context, lambdaCallback) => {
  try {
    const img = event.Records[0].s3.object.key,
      s3Bucket = event.Records[0].s3.bucket.name;

    await S3.upload({
      Bucket: s3Bucket,
      Key: img.replace(/\.\w\w\w$/, ".json"),
      ContentType: "application/json",
      Body: JSON.stringify(
        await R.detectFaces({
          Image: {
            S3Object: {
              Bucket: s3Bucket,
              Name: img,
            },
          },
        }).promise()
      ),
    }).promise();
    lambdaCallback(null);
  } catch (err) {
    lambdaCallback(err);
  }
};
