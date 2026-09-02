/* global Package Npm */

Package.describe({
  name: 'meteortesting:mocha-core',
  summary: 'Mocha server side wrappers. Internal package used by meteortesting:mocha.',
  version: '9.0.0',
  testOnly: true,
  git: 'https://github.com/meteortesting/meteor-mocha-core.git'
})

Npm.depends({
  mocha: '11.8.0'
})

Package.onUse(function (api) {
  api.versionsFrom(['3.0'])
  api.use('ecmascript')

  api.mainModule('client.js', 'client')
  api.mainModule('server.js', 'server')

  api.export(['mochaInstance', 'setupGlobals'], 'server')
})
