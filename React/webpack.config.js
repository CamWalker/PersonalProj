module.exports = {
  entry: [
    './main.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'index.js'
  },
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015','react']
        }
      }
    ]
  }
}
