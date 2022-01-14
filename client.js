// We need to import the "mocha.js" file specifically because that is the browser entry point.
import 'mocha/mocha.js';

import config from './loadConfig';

// This defines "describe", "it", etc.
let options = {
  ui: 'bdd',
  ...config,
};

mocha.setup(options);

export { mocha };
