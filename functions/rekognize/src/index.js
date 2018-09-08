export const handler = async (event, context, lambdaCallback) => {
  try {
    console.log(event);
    lambdaCallback(null);
  } catch (err) {
    lambdaCallback(err);
  }
};
