module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'prettier',
    'airbnb-base',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
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
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
  },
  overrides: [
    {
      files: ['build-utils/*', 'webpack*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 0,
        'import/no-extraneous-dependencies': 0,
      },
    },
  ],
};
