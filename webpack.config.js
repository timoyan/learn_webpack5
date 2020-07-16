const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  context: path.join(__dirname, "./src"),
  entry: {
    app: { import: "./index.js", dependOn: "vendor" },
    vendor: ["react", "react-dom"],
  },
  output: {
    filename: "[name]@[chunkhash].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: ".",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.ejs",
      inject: false,
      minify: false,
      title: "Learn Webpack",
    }),
  ],
};
