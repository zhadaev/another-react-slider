const Path = require('path')
const TerserPlugin = require('terser-webpack-plugin')

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
    react: {          
      commonjs: "react",          
      commonjs2: "react",          
      amd: "React",          
      root: "React"      
    },      
    "react-dom": {          
      commonjs: "react-dom",          
      commonjs2: "react-dom",          
      amd: "ReactDOM",          
      root: "ReactDOM"      
    }  
  },
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