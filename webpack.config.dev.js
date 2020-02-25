const Path = require('path');
// var ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin')

const src = Path.resolve(__dirname, 'src')
const dest = Path.resolve(__dirname, 'example')

module.exports = {
  entry: Path.join(src, 'index.js'),
  output: {
    path: dest,
    filename: 'index.js',
    // libraryTarget: 'commonjs2'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
  },
  module: {
    rules: [
      {
        test: /\.js(x)?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(s)?css$/,
        use : [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: Path.join(src, 'index.html')
    })
  ],
  externals: {
    // 'react': 'commonjs react' 
  },
  devServer: {
    port: 8080,
    contentBase: src,
    historyApiFallback: true,
    inline: true,
    hot: true
  }
};