module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
  ],
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  ignorePatterns: '*.js',
  rules: {
    'dot-location': ['error', 'property'],
    'eqeqeq': ['error', 'always', { null: 'ignore' }],
    'require-await': 'error',
    'array-bracket-spacing': ['error', 'never'],
    'block-spacing': ['error', 'always'],
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    'comma-dangle': ['error', 'always-multiline'],
    'linebreak-style': ['error', 'unix'],
    'no-tabs': 'error',
    'no-trailing-spaces': 'error',
    'no-unexpected-multiline': 'error',
    'no-unneeded-ternary': 'error',
    'object-curly-spacing': ['error', 'always'],
    'object-shorthand': 'error',
    'one-var-declaration-per-line': ['error', 'always'],
    'quotes': ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
    'semi': ['error', 'never'],
    'space-before-function-paren': ['error', { anonymous: 'never', named: 'never', asyncArrow: 'always' }],
    'space-before-blocks': 'error',
    'space-infix-ops': 'error',
    'unicode-bom': 'error',
    'keyword-spacing': ['error', { before: true, after: true }],
    'no-unused-vars': 'off',
    'no-case-declarations': 'off',
    'no-cond-assign': 'off',
  },
}