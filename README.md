# eslint-config-awkward

This package contains linting configuration that we use for our JavaScript projects at Awkward. The configuration is based on [JavaScript Standard Style](https://github.com/feross/standard).

## Installation

**1. Install the shareable config**

```bash
npm install @awkward/eslint-config --save-dev
```

**2. Install correct versions of peer dependencies**

List peer dependencies:

```bash
npm info "@awkward/eslint-config@latest" peerDependencies
```

macOS/Linux users can run the following command to install all peer dependencies at once:

```bash
(
  export PKG=@awkward/eslint-config;
  npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
)
```

Windows users can either install all the peer dependencies manually, or use the [install-peerdeps](https://github.com/nathanhleung/install-peerdeps) cli tool.

```bash
npm install -g install-peerdeps
install-peerdeps --dev @awkward/eslint-config
```

## Usage

Shareable configs are designed to work with the `extends` feature of `.eslintrc` files.
You can learn more about [Shareable Configs](http://eslint.org/docs/developer-guide/shareable-configs) on the official ESLint website.

This package includes the following configurations:

- [`@awkward`](configurations/base.js) − The base configuration used for all projects.
- [`@awkward/react`](configurations/react.js) − To be used in addition to `@awkward` configuration for projects that use [React](https://facebook.github.io/react/).

An example of what to put in your `.eslintrc.json` file:

```json
{
  "extends": [
    "@awkward",
    "@awkward/eslint-config/react",
    ... // additional configs to extend from
  ]
}
```

## TODO

- Leveraging ESLint in your project (lint-staged, auto fix) w/ examples (package.json)
