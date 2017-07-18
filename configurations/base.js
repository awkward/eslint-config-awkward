module.exports = {
  extends: ['standard', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      'warn',
      {
        semi: false,
        singleQuote: true,
        bracketSpacing: true,
        jsxBracketSameLine: true
      }
    ]
  }
}
