module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'implicit-arrow-linebreak': ['off'],
    'arrow-parens': ['off'],
    '@typescript-eslint/naming-convention': ['off'],
    '@typescript-eslint/no-explicit-any': ['off'],
    '@typescript-eslint/ban-ts-comment': ['off'],
    'vue/attribute-hyphenation': 0,
    'vue/multi-word-component-names': 'off',
    'vue/html-closing-bracket-newline': [2, {
      singleline: 'never',
      multiline: 'always'
    }],
    'vue/html-closing-bracket-spacing': 2,
    'vue/html-end-tags': 2,
    'vue/html-indent': ['error', 2, {
      attribute: 1,
      baseIndent: 1,
      closeBracket: 0,
      alignAttributesVertically: true,
      ignores: []
    }],
    'vue/max-attributes-per-line': [2, {
      singleline: 4,
      multiline: 4
    }],
    'vue/no-unused-components': [2],
    'no-multiple-empty-lines': 2,
    'no-trailing-spaces': 1,
    'no-var': 2,
    indent: ['error', 2],
    semi: [2, 'always'],
    'no-dupe-args': [2]
  }
};
