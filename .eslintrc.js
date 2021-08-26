module.exports = {
  root: true,
  env: {
    browser: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
  },
  extends: ['airbnb-base', 'plugin:vue/vue3-recommended', 'plugin:prettier/recommended'],
  rules: {
    'comma-dangle': 'off',
    'class-methods-use-this': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'import/no-absolute-path': 'off',
    'implicit-arrow-linebreak': 'off',
    'import/prefer-default-export': 'off',
    'vue/component-name-in-template-casing': [
      'error',
      'kebab-case',
      {
        ignores: [],
      },
    ],
    'vue/require-default-prop': 'off',
    'prettier/prettier': ['error', { endOfLine: 'auto' }, { usePrettierrc: true }],
    'no-unused-vars': ['error', { varsIgnorePattern: '.*', args: 'none' }],
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-param-reassign': 'off',
    'no-shadow': 'off',
    'no-plusplus': 'off',
  },
};
