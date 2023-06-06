Package.describe({
  name: 'grubba:mocha-core',
  summary: 'Internal package used by meteortesting:mocha.',
  version: '8.2.2-alpha300.9',
  testOnly: true,
  git: 'https://github.com/meteortesting/meteor-mocha-core.git'
});

Npm.depends({
  mocha: '8.2.1'
});

Package.onUse(function (api, where) {
  api.use('ecmascript@1.0.0-alpha300.9');

  api.mainModule('client.js', 'client');
  api.mainModule('server.js', 'server');

  api.export(['mochaInstance', 'setupGlobals'], 'server');
});
