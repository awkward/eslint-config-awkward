module.exports = {
  extends: ['awkward/base', 'standard-react'],
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'jsx-quotes': [2, 'prefer-single'],
  },
}
