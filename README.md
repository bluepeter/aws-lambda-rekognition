# aws-lambda-rekognition

Lambda invocation of AWS Rekognition for facial recognition

## How to use

1. Clone this repo!
2. `yarn` to build everything.
3. Go to AWS Console.
4. Create an S3 bucket that we will use for Rekognition. (Or use an existing
   one.)
5. Add the bucket name to `.env` (or `.env.local`).
6. Create a Node.js 8.10 Lambda function called "rekognize" with dummy
   Javascript. When you create the function, add a Role giving full access to
   CloudWatch, Rekognition, and S3. Bump up the timeout to 30 seconds.
7. `yarn run deploy` to deploy the Lambda function!
