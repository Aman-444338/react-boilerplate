const path = require('path');
const paths = require('./paths');

/**
 * Determine the array of extensions that should be used to resolve modules.
 */
module.exports = {
  modules: [paths.appSrc, 'node_modules'],
  extensions: ['.tsx', '.ts','.js', '.jsx', '.scss', '.react.js'],
  mainFields: ['browser', 'module', 'main'],
  alias: {
    // Support React Native Web
    // https://www.smashingmagazine.com/2016/08/a-glimpse-into-the-future-with-react-native-for-web/
    'react-native': 'react-native-web',
    configurations: path.resolve(__dirname, '../src/configurations'),
    utils: path.resolve(__dirname, '../src/utils'),
  },
};
