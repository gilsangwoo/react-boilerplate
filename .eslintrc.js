const error = 'error';
const warn = 'warn';
const off = 'off';
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'prettier/prettier': error,
    'no-use-before-define': off,
    '@typescript-eslint/no-use-before-define': [error],
    'react/jsx-filename-extension': [
      error,
      {extensions: ['.js', '.jsx', '.ts', '.tsx']},
    ],
    'import/extensions': [
      error,
      'ignorePackages',
      {
        js: 'never',
        ts: 'never',
        jsx: 'never',
        tsx: 'never',
      },
    ],
    // 비대화형 요소에 클릭 핸들러를 등록한다면 키보드 액션관련 핸들러도 등록해야합니다.
    'jsx-a11y/click-events-have-key-events': warn,
    // 스택틱 요소에 이터렉션을 등록하면 않됩니다.
    'jsx-a11y/no-static-element-interactions': warn,
    // 비대화형 요소에 헨들러를 등록하지 않아야합니다.
    'jsx-a11y/no-noninteractive-element-interactions': warn,
    'class-methods-use-this': off,
    // 클래스 내부의 매소드는 반드시 this를 포함하고 있어야합니다. 메소드 체이닝 을 하는 소스가 많기에 off합니다.
    'no-unused-vars': off,
    '@typescript-eslint/no-unused-vars': [error],
    'react/prop-types': off,
    'react/require-default-props': off,
    // this와 함꼐하는 _ 에 대해서만 허용합니다.
    'no-underscore-dangle': ['error', {allowAfterThis: true}],
    // button type 을 사용할 경우 'submit' | 'reset' | 'button' 중 하나가 반드시 있어야 합니다.
    // 'react/button-has-type': off,
    'no-throw-literal': 'off',
    '@typescript-eslint/no-throw-literal': ['error'],
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: './config/webpack.common.js',
      },
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
