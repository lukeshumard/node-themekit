# @shopify/themekit

Node version of [Theme Kit](http://shopify.github.io/themekit/).

## Table Of Contents

- [Installation](#installation)
- [Options](#options)
- [Examples](#examples)
- [API](#api)
    + [`commands(options, callback)`](#themekitcommandsargs)
- [CLI](#cli)
- [License](http://github.com/Shopify/node-themekit/blob/master/LICENSE.md)

## Installation

```bash
$ npm install @shopify/themekit
$ yarn install @shopify/themekit
```

## Options
Theme Kit uses your project's `package.json` file to pass in options.

```javascript
{
  "themekit": {
    "version": "0.7.5",
    // Version of Theme Kit binary to use

    "local": false,
    // If set to true, your local copy of Theme Kit instead of downloading binary

    "baseURL": "https://shopify-themekit.s3.amazonaws.com",
    // Location where to download Theme Kit binary from
  }
}
```

## Examples

### Run commands

Here are a collection of examples to run Theme Kit commands.

For a complete list of commands and args: [shopify.github.io/themekit/commands](http://shopify.github.io/themekit/commands).

#### Example 1

Print Theme Kit version info.

```javascript
const ThemeKit = require('@shopify/themekit');

ThemeKit(['version'], (err) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log('Theme Kit command has completed.');
});
```

#### Example 2

Remove specific files from development environment.

```javascript
const ThemeKit = require('@shopify/themekit');


ThemeKit(
  ['remove', '--env', 'development', 'snippets/pagination.liquid', 'snippets/date.liquid'],
    (err) => {
      if (err) {
        console.error(err);
        return;
      }

    console.log('Theme Kit command has completed.');
  });
```

#### Example 3

Deploy all files to staging environment.

```javascript
const ThemeKit = require('@shopify/themekit');

ThemeKit(['deploy', '--env', 'staging'], (err) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log('Theme Kit command has completed.');
});
```

#### Example 4

Deploy theme to production via NPM scripts.

**Warning:** This example will overwrite the theme based on your `config.yml`.

```json
"dependencies": {
  "@shopify/themekit": "0.4.3"
},
"scripts": {
  "deploy": "shopify-themekit replace --env production"
}
```

## API

### `command(commands, callback)`

Executes command with arguments using the Theme Kit binary.

- commands `<Array>`  
  ```javascript
  ['replace', '--env', 'staging']
  // => theme replace --env staging
  ```

- callback `<Function>`

  ```javascript
  function(error) {

  }
  ```

For a complete list of commands and args: [shopify.github.io/themekit/commands/](http://shopify.github.io/themekit/commands/).

## CLI

```bash
$ shopify-themekit <args>
```

This CLI component of this package is intended to be used with NPM scripts. If you plan on using the command line interface heavily, please refer to: [shopify.github.io/themekit](http://shopify.github.io/themekit).

## License

MIT, see [LICENSE.md](http://github.com/Shopify/node-themekit/blob/master/LICENSE.md) for details.

<img src="https://cdn.shopify.com/shopify-marketing_assets/builds/19.0.0/shopify-full-color-black.svg" width="200" />
