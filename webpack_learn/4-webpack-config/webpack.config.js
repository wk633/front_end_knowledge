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
  }
};
