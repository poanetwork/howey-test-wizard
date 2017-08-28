const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: ['./src/index.js', './src/stylesheets/main.scss'],
  output: {
    filename: 'public/bundle.js'
  },
  devServer: {
    contentBase: './public',
    compress: true,
    hot: true,
    host: '0.0.0.0',
    port: 8080,
    watchContentBase: true
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: ['/node_modules/', '/public/']
    }, {
      test: /\.scss$/,
      exclude: ['/node_modules/', '/public/'],
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [{
          loader: 'css-loader',
          options: {
            url: false,
            sourceMap: true
          }
        }, {
          loader: 'postcss-loader',
          options: {
            plugins: (loader) => [
              require('autoprefixer')
            ]
          }
        }, {
          loader: 'sass-loader'
        }, {
          loader: 'import-glob-loader'
        }]
      })
    }]
  },
  plugins: [
    new ExtractTextPlugin('public/stylesheets.css')
  ],
  watch: true,
  devtool: 'source-map'
}
