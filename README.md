# AWS Lambda + Rekognition

This project will setup an S3 trigger whenever an image is added to the S3
bucket. The trigger will invoke a Lambda function. In turn, this Lambda
function will call AWS Rekognition, and output the results in the same S3
bucket as a JSON file.

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
7. `yarn run deploy` to deploy our code to this new Lambda function!
8. Go back to your S3 bucket. We are going to add a trigger so that our
   function fires whenever a `png` image is added. Click the "Properties" tab.
   Expand the "Events" panel. Add a Lambda trigger that should look like this:
   ![Screenshot](https://user-images.githubusercontent.com/2158187/45250485-e80b1f80-b2e8-11e8-988b-07fe25212e7d.png)
