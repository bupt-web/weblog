module.exports = {
  entry: [
    './frontend/js/index.js'
  ],
  output: {
    path: 'public',
    filename: 'app.js',
    publicPath: '/'
  },
  module: {
    loaders: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader?presets[]=es2015&presets[]=react'
      }, {
        test: /\.less$/,
        loader: 'style!css!less'
      },
    ]
  }
};
