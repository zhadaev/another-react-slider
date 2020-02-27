const Path = require('path')

const src = Path.resolve(__dirname, 'src')
const dest = Path.resolve(__dirname, 'dist')

module.exports = {
  mode: 'production',
  entry: Path.join(src, 'index.jsx'),
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
  externals: {
    react: 'react',
    'react-dom': 'react-dom'
  }
}