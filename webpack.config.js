var path = require("path");
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');


module.exports = {
  plugins: [
        // To strip all locales except “en”
        new MomentLocalesPlugin(),

        // Or: To strip all locales except “en”, “es-us” and “ru”
        // (“en” is built into Moment and can’t be removed)
        new MomentLocalesPlugin({
            localesToKeep: ['es-us', 'ru'],
        }),
  ],
  entry: "./frontend/pruvia.jsx",
  output: {
    path: path.resolve(__dirname, "app", "assets", "javascripts"),
    filename: "./bundle.js"
  },
  module: {
    
    rules: [
      {
        test: [/\.jsx?$/],
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          query: {
            presets: ["@babel/env", "@babel/react"]
          }
        }
      },
      { test: /\.css$/, loader: ['style-loader', 'css-loader'] }
    ]
  },
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".jsx", "*"]
  }
};
