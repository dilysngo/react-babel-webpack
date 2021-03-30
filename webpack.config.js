const path = require("path");

const config = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },
  module: {
    rules: [
      {
        test: /\.js$/, // use js
        exclude: /node_modules/,
        loader: "babel-loader", // es6 ->> es5
      },
      {
        // test: /\.css$/, // use css
        // use: ["style-loader", "css-loader"],

        test: /\.scss$/, // use scss
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  // devtool: "cheap-module-eval-source-map",
  devServer: {
    contentBase: path.join(__dirname, "public"), // Run dev serve
  },
};

module.exports = config;
