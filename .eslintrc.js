// eslint-disable-next-line @typescript-eslint/no-unused-vars
const error = 'error';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const warn = 'warn';
const off = 'off';
module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      ecmaVersion: 2018,
      sourceType: 'module',
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'prettier/prettier': 'error',
  },
  overrides: [
    {
      files: ['build-utils/*', 'webpack*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': off,
        'import/no-extraneous-dependencies': off,
      },
    },
  ],
};
