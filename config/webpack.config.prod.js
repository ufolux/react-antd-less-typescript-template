const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const { getCssLoader } = require('./common_funcs')
const { resolve } = require('path')

module.exports = {
  output: {
    filename: 'scripts/[name].[contenthash].js',
    path: resolve(__dirname, '../dist'),
    clean: true // clean dist before building
  },
  module: {
    rules: [
      {
        test: /\.less$/i,
        oneOf: [
          {
            resourceQuery: /modules/,
            use: getCssLoader(true, true, 'less')
          },
          {
            use: getCssLoader(true, false, 'less')
          }
        ]
      },
      {
        test: /\.css$/i,
        oneOf: [
          {
            resourceQuery: /modules/,
            use: getCssLoader(true, true)
          },
          {
            use: getCssLoader(true, false)
          }
        ]
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [{ from: 'public', to: 'static' }]
    })
  ],
  mode: 'production',
  optimization: {
    minimizer: [
      new UglifyJsPlugin(),
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            plugins: [
              'imagemin-gifsicle',
              'imagemin-mozjpeg',
              'imagemin-pngquant',
              'imagemin-svgo'
            ]
          }
        },
        generator: [
          {
            // You can apply generator using `?as=webp`, you can use any name and provide more options
            preset: 'webp',
            implementation: ImageMinimizerPlugin.imageminGenerate,
            options: {
              plugins: ['imagemin-webp']
            }
          }
        ]
      })
    ]
  }
}
