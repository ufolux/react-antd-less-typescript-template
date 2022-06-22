const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const AutoCSSModulesWebpackPlugin = require('auto-css-modules-webpack-plugin')

module.exports = {
  // webpack
  entry: './src/index.tsx',
  // loaders config
  module: {
    rules: [
      {
        test: /\.(png|gif|jpe?g|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'static/images/[hash][ext][query]'
        }
      },
      {
        test: /\.(mp3|wav)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'static/audios/[hash][ext][query]'
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'static/fonts/[hash][ext][query]'
        }
      },
      {
        test: /\.(ts|js)x?$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript'
            ],
            plugins: [
              [
                '@babel/plugin-transform-runtime',
                {
                  regenerator: true
                }
              ],
              [
                '@babel/plugin-proposal-decorators',
                {
                  legacy: true
                }
              ]
            ]
          }
        }
      }
    ]
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, '../src')
    },
    extensions: ['.tsx', '.ts', '.jsx', '.js']
  },
  // plugins config
  plugins: [
    // create an empty html file, then import all output resources (js/css)
    new HtmlWebpackPlugin({
      // copy '../index.html'
      template: 'index.html',
      //
      minify: {
        collapseWhitespace: true,
        removeComments: true
      }
    }),
    new AutoCSSModulesWebpackPlugin()
  ]
}
