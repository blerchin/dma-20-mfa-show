import 'promise-polyfill/src/polyfill';

const modernBrowser = (
  'fetch' in window &&
  'assign' in Object
);

const maybePolyfill = modernBrowser ? Promise.resolve() : import('./polyfill.js');
maybePolyfill.then(() => {
  require('./index.js');
}).catch((err) => console.log(`sadness ;/ ${err}`))
