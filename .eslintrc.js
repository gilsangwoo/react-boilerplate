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
    'jsx-a11y/click-events-have-key-events': warn, // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/click-events-have-key-events.md
    'jsx-a11y/no-static-element-interactions': warn, // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md,
    'jsx-a11y/no-noninteractive-element-interactions': warn, // 비대화형 요소(div, h, p)에 헨들러를 등록하지 않아야합니다.
    'class-methods-use-this': off, // 클래스 내부의 매소드는 반드시 this를 포함하고 있어야합니다. 메소드 체이닝 을 하는 소스가 많기에 off합니다.
    'no-unused-vars': off,
    '@typescript-eslint/no-unused-vars': [error],
    'react/prop-types': off,
    'react/require-default-props': off,
  },
};

// const error = 'error';
// const warn = 'warn';
// const off = 'off';
// module.exports = {
//   root: true,
//   env: {
//     es6: true,
//     browser: true,
//     node: true,
//   },
//   parser: 'babel-eslint',
//   extends: [
//     'eslint:recommended',
//     'airbnb',
//     'airbnb/hooks',
//     'plugin:prettier/recommended',
//   ],
//   parserOptions: {
//     ecmaFeatures: {
//       jsx: true,
//     },
//     ecmaVersion: 6,
//     sourceType: 'module',
//     allowImportExportEverywhere: 1,
//     experimentalObjectRestSpread: 1,
//   },
//   rules: {
//     'prettier/prettier': 'error',
//     'react/jsx-filename-extension': [
//       error,
//       {extensions: ['.js', '.jsx', '.ts', '.tsx']},
//     ],
//     'react/destructuring-assignment': warn, // hooks 로 이전 되면 다 지웁시다.
//     // '@typescript-eslint/explicit-module-boundary-types': off,
//     'jsx-a11y/click-events-have-key-events': off, // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/click-events-have-key-events.md
//     'jsx-a11y/no-static-element-interactions': off, // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md,
//     'jsx-a11y/no-noninteractive-element-interactions': warn, // 비대화형 요소(div, h, p)에 헨들러를 등록하지 않아야합니다.
//     'import/extensions': [
//       error,
//       'ignorePackages',
//       {
//         js: 'never',
//         ts: 'never',
//         jsx: 'never',
//         tsx: 'never',
//       },
//     ],
//     'class-methods-use-this': off, // 클래스 내부의 매소드는 반드시 this를 포함하고 있어야합니다. 메소드 체이닝 을 하는 소스가 많기에 off합니다.
//     'react/button-has-type': off, // button type 을 사용할 경우 'submit' | 'reset' | 'button' 중 하나가 반드시 있어야 합니다.
//     // 'no-underscore-dangle': ['error', {allowAfterThis: true}], // 특별한 경우 외에 _스코어를 사용하면 않됩니다. 클래스 내에서 _매소드를 호출하는 건을 허용합니다.
//     'no-underscore-dangle': off,
//     'import/no-cycle': off, // 같은 파일에 대한 접근은 하위 파일에서 할수 없습니다.
//     // 'no-mixed-spaces-and-tabs': [error, 'smart-tabs'],
//     // 'no-duplicate-imports': error,
//     // 'no-prototype-builtins': error,
//     // 'no-restricted-syntax': [
//     //   error,
//     //   {
//     //     selector: `:matches(ImportNamespaceSpecifier[local.name!='React'])`,
//     //     message: 'Import/export only modules you need',
//     //   },
//     // ],
//     // 'comma-dangle': [error, 'always-multiline'],
//     // 'object-curly-spacing': [error, 'never'],
//     // 'prefer-destructuring': [warn, {object: true, array: true}],
//   },
//   settings: {
//     'import/resolver': {
//       typescript: {},
//       webpack: {
//         config: './config/webpack.common.js',
//       },
//       node: {
//         extensions: ['.js', '.jsx', '.ts', '.tsx'],
//       },
//     },
//   },
//   overrides: [
//     {
//       files: '**/*.+(ts|tsx)',
//       parser: '@typescript-eslint/parser',
//       parserOptions: {
//         project: './tsconfig.json',
//       },
//       extends: [
//         'plugin:@typescript-eslint/recommended',
//         'prettier/@typescript-eslint',
//       ],
//       rules: {
//         'no-use-before-define': off,
//         '@typescript-eslint/no-use-before-define': [error],
//         '@typescript-eslint/no-non-null-assertion': warn, // ! Non-null assertion operator 를 쓰지 않아야 합니다. ? 로 변경해야합니다.
//         'react/prop-types': off,
//         'react/require-default-props': off,
//         // '@typescript-eslint/explicit-function-return-type': [
//         //   error,
//         //   {allowTypedFunctionExpressions: true},
//         // ],
//         // '@typescript-eslint/explicit-module-boundary-types': [error],
//         'no-unused-vars': off,
//         '@typescript-eslint/no-unused-vars': [error],
//       },
//     },
//   ],
// };
