/* eslint-env jest */

const eslint = require('eslint')

test('load config in eslint to validate all rule syntax is correct', () => {
  const CLIEngine = eslint.CLIEngine

  const cli = new CLIEngine({
    useEslintrc: false,
    configFile: '.eslintrc.json'
  })

  const code = 'var foo = 1\nvar bar = function() {}\nbar(foo)\n'

  const res = cli.executeOnText(code)

  expect(res.errorCount).toBe(0)
  expect(res.warningCount).toBe(0)
})
