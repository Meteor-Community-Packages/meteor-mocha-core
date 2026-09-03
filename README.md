# meteortesting:mocha-core

This is an internal package. Please use [`meteortesting:mocha`](https://github.com/meteortesting/meteor-mocha)

## Requirements

Version 9 bundles mocha 11, which requires Node.js 18.18 or later, so it needs
Meteor 3. Apps on Meteor 2 need to stay on version 8.

## In-/Decrease default test timeout

In case you want to in- or decrease the default timeout of 2000 ms, you can set the environment variable `MOCHA_TIMEOUT` in your shell which will be picked up by this library and passed on to the mocha instance.

## Mocha configuration with .mocharc file
<!-- Please keep this section in sync with meteortesting:mocha package -->

You can configure the mocha runner with a `.mocharc.js` or a `.mocharc.json` file at the root of your Meteor app. This package uses mocha programmatically, so it supports a constrained list of options.

If both files are defined, `.mocharc.js` will overwrite the settings in `.mocharc.json`.

The setting `timeout` will be overwritten if the environment variable `MOCHA_TIMEOUT` is set.

* Read more about using mocha and supported options [here](https://github.com/mochajs/mocha/wiki/Using-Mocha-programmatically).
* You can find examples of config files [here](https://github.com/mochajs/mocha/tree/master/example/config).

### Example

Feel free to start with this file as an example:

```js
module.exports = {
  forbidOnly: process.env.IS_CI, // You could set this variable inside your continuous integration platform
  retries: 2,
  slow: 200,
  timeout: 10000,
  grep: 'hello' // Only runs tests whose name contains this
};
```