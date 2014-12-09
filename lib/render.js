
/**
 * Module dependencies.
 */

var views = require('co-views');
var swig = views(__dirname + '/../views', { map: { html: 'swig' } });

/**
 * Expose `swig`.
 */

module.exports = swig;
