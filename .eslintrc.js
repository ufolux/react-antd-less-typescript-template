module.exports = {
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'react-app'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  env: {
    browser: true,
    es6: true,
    commonjs: true
  },
  rules: {
    'no-extra-semi': 'error',
    semi: [2, 'never'],
    'no-use-before-define': 'off',
    quotes: [2, 'single'],
    '@typescript-eslint/no-use-before-define': ['error'],
    '@typescript-eslint/no-unused-vars': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'import/extensions': 'off',
    'no-unused-vars': 'off',
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }]
  }
}
