var path = require('path');

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
    port: 3001,
    inline: true, //auto refresh
    contentBase: path.join(__dirname, 'public')
  }
};