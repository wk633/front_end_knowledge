var path = require('path');
const SERVER_PORT = process.env.SERVER_PORT || 8080

module.exports = {
  entry: "./entry.js",
  output: {
    path: __dirname + '/public',
    filename: "bundle.js"
  },
  module: {
    rules: [
      {test: /\.css$/, loader: "style-loader!css-loader"},
      {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
    ]
  },
  devServer: {
    port: SERVER_PORT,
    inline: true, //auto refresh
    contentBase: path.join(__dirname, 'public')
  }
};
