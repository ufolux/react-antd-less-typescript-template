const Package = require('../package.json')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const proxy = Package.proxy ?? {}
const { getCssLoader } = require('./common_funcs')

module.exports = {
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      async: false
    }),
    new ESLintPlugin({
      extensions: ['js', 'jsx', 'ts', 'tsx']
    })
  ],
  module: {
    rules: [
      {
        test: /\.less$/i,
        oneOf: [
          {
            resourceQuery: /modules/,
            use: getCssLoader(false, true, 'less')
          },
          {
            use: getCssLoader(false, false, 'less')
          }
        ]
      },
      {
        test: /\.css$/i,
        oneOf: [
          {
            resourceQuery: /modules/,
            use: getCssLoader(false, true)
          },
          {
            use: getCssLoader(false, false)
          }
        ]
      }
    ]
  },
  devtool: 'eval-cheap-module-source-map',
  mode: 'development',
  devServer: {
    static: '../dist',
    compress: true,
    port: 3000,
    open: true,
    hot: true,
    proxy,
    historyApiFallback: true
  }
}
