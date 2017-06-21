var path = require('path');

module.exports = {
  entry: "./entry.js",
  output: {
    path: __dirname + '/public',
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {test: /\.css$/, loader: "style-loader!css-loader"}
    ]
  },
  devServer: {
    port: 3001,
    inline: true, //auto refresh
    contentBase: path.join(__dirname, 'public')
  }
};
