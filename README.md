# eslint-config-awkward

This package contains linting configuration that we use for our JavaScript projects at Awkward. The configuration is based on [JavaScript Standard Style](https://github.com/feross/standard).

## Installation

```bash
npm install eslint-config-awkward --save-dev
```

or

```bash
yarn add eslint-config-awkward --dev
```

## Usage

Shareable configs are designed to work with the `extends` feature of `.eslintrc` files.
You can learn more about [Shareable Configs](http://eslint.org/docs/developer-guide/shareable-configs) on the official ESLint website.

This package includes the following configurations:

- [`awkward`](configurations/base.js) − The base configuration used for all projects.
- [`awkward/react`](configurations/react.js) − To be used in addition to `awkward` configuration for projects that use [React](https://facebook.github.io/react/).

An example of what to put in your `.eslintrc.json` file:

```json
{
  "extends": [
    "awkward",
    "awkward/react",
    ... // additional configs to extend from
  ]
}
```
