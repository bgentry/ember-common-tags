/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-common-tags',
};

/* eslint-env node */
('use strict');

module.exports = {
  name: 'ember-common-tags',

  included() {
    this._super.included.apply(this, arguments);

    this.import('vendor/-common-tags-bundle.js');
    this.import('vendor/-common-tags-shims.js');
  },

  treeForVendor() {
    const WebpackDependencyPlugin = require('./lib/webpack-dependency-plugin');

    return new WebpackDependencyPlugin({
      outputName: 'common-tags',
      expose: ['common-tags'],
    });
  },
};
