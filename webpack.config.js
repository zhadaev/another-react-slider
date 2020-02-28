const Path = require('path')
const TerserPlugin = require('terser-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const src = Path.resolve(__dirname, 'src')
const dest = Path.resolve(__dirname, 'dist')

module.exports = {
  mode: 'production',
  entry: Path.join(src, 'index.js'),
  output: {
    path: dest,
    filename: 'index.js',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
    alias: {
      'assets': Path.resolve(src, 'assets')
    }
  },
  module: {
    rules: [
      {
        test: /\.js(x)?$/,
        use: {
          loader: 'babel-loader',
          query: {
            cacheDirectory: true,
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        },
        exclude: /node_modules/
      },
      {
        test: /\.(s)?css$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.svg$/,
        loader: 'url-loader',
        options: {
          fallback: 'file-loader',
          name: '[name].[ext]'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: Path.join(src, 'template.html')
    })
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          keep_fnames: true,
        },
      }),
    ],
  }
}