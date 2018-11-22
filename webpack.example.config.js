const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./examples/index.html",
  filename: "./index.html"
});

module.exports = {
  entry: "./examples/index.js",
  mode: "development",
  output: {
    filename: "example.js",
    path: path.resolve(__dirname, "examples")
  },
  devServer: {
    contentBase: path.join(__dirname, "examples"),
    compress: true,
    port: 9000
  },
  plugins: [htmlPlugin],
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};
