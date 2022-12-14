const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode : "development",
    entry :"./src/index.js",
    output : {
     filename:"main.[contentHash].js", 
     path: path.resolve(__dirname, "dist")
    },
    devServer:{
      static: {
      directory:path.resolve(__dirname, "public"),
    },
      port: 'auto',
      hot: true,
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/template.html',
    }),],
    module: {
        rules: [
          {
            test: /\.css$/,
            use: ["style-loader", "css-loader"],
          },
        ],
      },
}