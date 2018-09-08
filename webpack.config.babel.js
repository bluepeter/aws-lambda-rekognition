import path from "path";
import Webpack from "webpack";
import Dotenv from "dotenv-webpack";

const myPath = "./functions/rekognize/";

module.exports = {
  entry: myPath + "src/index.js",
  target: "node",
  mode: "production",
  plugins: [
    new Webpack.NoEmitOnErrorsPlugin(),
    new Dotenv({ path: "../../.env.production" }),
    new Dotenv({ path: "../../.env.local" }),
    new Dotenv({ path: "../../.env" }),
  ],
  output: {
    path: path.join(process.cwd(), myPath, "built"),
    filename: "index.js",
    libraryTarget: "commonjs2",
  },
  externals: ["aws-sdk"],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        options: {
          cacheDirectory: true,
          babelrc: false,
          presets: [
            "stage-0",
            [
              "env",
              {
                targets: { node: "8.10" },
                useBuiltIns: false,
                debug: false,
              },
            ],
          ],
          plugins: ["transform-runtime"],
        },
        exclude: [{ and: [/node_modules/] }],
      },
    ],
  },
};
