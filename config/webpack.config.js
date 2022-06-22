const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.config.common')
const productionConfig = require('./webpack.config.prod')
const developmentConfig = require('./webpack.config.dev')

// https://blog.csdn.net/p1967914901/article/details/122093874
// https://blog.csdn.net/p1967914901/article/details/122430570
// https://blog.csdn.net/p1967914901/article/details/122462173

module.exports = env => {
  switch (true) {
    case env.development:
      return merge(commonConfig, developmentConfig)

    case env.production:
      return merge(commonConfig, productionConfig)

    default:
      return new Error('No matching configuration was found')
  }
}
