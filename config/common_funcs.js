function getCssLoader (prod, cssModules, preprocessor = '') {
  const extraLoaderNum = preprocessor ? 1 : 0
  const sourceMap = !prod
  const localIdentName = prod
    ? '[hash:base64]'
    : '[path][name]__[local]--[hash:base64:5]'
  return [
    'style-loader',
    cssModules
      ? {
          loader: 'css-loader',
          options: {
            importLoaders: extraLoaderNum,
            modules: {
              localIdentName
            }
          }
        }
      : {
          loader: 'css-loader',
          options: {
            importLoaders: extraLoaderNum,
            modules: false
          }
        },
    preprocessor
      ? {
          loader: `${preprocessor}-loader`,
          options: {
            sourceMap,
            lessOptions: {
              javascriptEnabled: true
            }
          }
        }
      : ''
  ].filter(Boolean)
}

module.exports = {
  getCssLoader
}
