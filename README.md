# eleventy-load-file

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Prettier][prettier-src]][prettier-href]

Emit files to the Eleventy output directory using [eleventy-load](https://github.com/gregives/eleventy-load).

## Getting Started

Firstly, you'll need to install [eleventy-load](https://github.com/gregives/eleventy-load) (if you haven't already) and eleventy-load-file. You'll probably want to use eleventy-load-file in combination with [eleventy-load-html](https://github.com/gregives/eleventy-load-html), so we'll install that as well.

```sh
npm install --save-dev eleventy-load eleventy-load-file eleventy-load-html
```

Then you can set up eleventy-load-file using a rule in your eleventy-load options.

```js
module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(require("eleventy-load"), {
    rules: [
      {
        test: /\.html$/,
        loaders: [
          {
            loader: require("eleventy-load-html"),
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        loaders: [
          {
            loader: require("eleventy-load-file"),
            options: {
              name: "[name].[hash:16].[ext]",
            },
          },
        ],
      },
    ],
  });
};
```

## Options

| Name                            | Type     | Default                 | Description                                |
| ------------------------------- | -------- | ----------------------- | ------------------------------------------ |
| [**`name`**](#name)             | `String` | `"[hash].[ext]"`        | Filename template for the emitted file     |
| [**`outputPath`**](#outputpath) | `String` | `this.config.outputDir` | Path where the emitted file will be placed |
| [**`publicPath`**](#publicpath) | `String` | `"assets"`              | Public path for the emitted file           |

### `name`

Type: `String` Default: `"[hash].[ext]"`.

Filename template for the emitted file which can include placeholders, see the [list of placeholders below](#placeholders).

```c
"[name].[hash:16].[ext]" // styles.c0c108d2da16f77a.css
```

### `outputPath`

Type: `String` Default: `this.config.outputDir`

Path where the emitted file will be placed. This defaults to the Eleventy project's output directory.

### `publicPath`

Type: `String` Default: `"assets"`

Public path for the emitted file within the output directory. By default, the file will be saved into an `assets` folder, so the URL returned from eleventy-load-file will resemble `/assets/styles.c0c108d2da16f77a.css`.

## Placeholders

The following placeholders are replaced in the `name` option:

- `[ext]` the extension of the resource
- `[name]` the basename of the resource
- `[hash]` or `[hash:N]` the hash of the content of the resource, length `N` defaults to 8 characters

<!-- References -->

[npm-version-src]: https://img.shields.io/npm/v/eleventy-load-file/latest.svg
[npm-version-href]: https://npmjs.com/package/eleventy-load-file
[npm-downloads-src]: https://img.shields.io/npm/dt/eleventy-load-file.svg
[npm-downloads-href]: https://npmjs.com/package/eleventy-load-file
[license-src]: https://img.shields.io/npm/l/eleventy-load-file.svg
[license-href]: https://npmjs.com/package/eleventy-load-file
[prettier-src]: https://img.shields.io/badge/code_style-prettier-ff69b4.svg
[prettier-href]: https://github.com/prettier/prettier
