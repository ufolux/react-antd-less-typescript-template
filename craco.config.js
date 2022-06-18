const CracoLessPlugin = require('craco-less')
const CracoCSSModules = require('craco-css-modules')
const path = require('path')
const WebpackBar = require('webpackbar')
const CircularDependencyPlugin = require('circular-dependency-plugin')

const customizeTheme = { '@primary-color': '#9b42e3' }

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: customizeTheme,
            javascriptEnabled: true,
            module: true
          }
        }
      }
    },
    {
      plugin: CracoCSSModules
    }
  ],
  webpack: {
    // 配置别名，设置别名是为了让后续引用的地方减少路径的复杂度
    alias: {
      '@': path.resolve('src')
    },
    // webpack插件
    plugins: [
      new WebpackBar({ profile: true }),
      new CircularDependencyPlugin({
        exclude: /node_modules/,
        include: /src/,
        failOnError: true,
        allowAsyncCycles: false,
        cwd: process.cwd()
      })
    ]
  }
}
