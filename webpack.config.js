const path = require("path");

module.exports = {
  entry: "./lib/index.js",
  output: {
    filename: "react-font-scale.js",
    path: path.resolve(__dirname, "dist"),
    library: "react-font-scale",
    libraryTarget: "umd"
  },
  externals: {
    react: 'umd react',
    'react-dom': 'umd react-dom'
  },
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
