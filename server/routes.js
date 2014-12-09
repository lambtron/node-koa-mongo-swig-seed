
/**
 * Module dependencies.
 */

var render = require('../lib/render');
var Models = require('../lib/models');
var Tweet = require('./tweet');

/**
 * Define `Routes`.
 */

var Routes = {};

/**
 * Render index html page.
 */

Routes.index = function *index() {
  this.body = yield render('index');
};

/**
 * Do foo.
 */

Routes.doFoo = function *doFoo() {
  this.body = 'OK';
};

/**
 * Expose `Routes`.
 */

module.exports = Routes;
