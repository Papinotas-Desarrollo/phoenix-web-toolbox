const path = require('path');

module.exports = {
  root: true,
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true
  },
  extends: ['plugin:import/recommended', 'airbnb', 'prettier', 'prettier/react'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
  },
  plugins: ['babel', 'prettier', 'material-ui', 'react-hooks'],
  rules: {
    'eqeqeq': 'error',
    'import/no-extraneous-dependencies': 'off',
    'prettier/prettier': ['error'],
    'react/jsx-filename-extension': [
      1,
      {
        'extensions': ['.js', '.jsx']
      }
    ]
  }
};
