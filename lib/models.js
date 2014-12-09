
/**
 * Module dependencies.
 */

var mongo = process.env.MONGOHQ_URL || 'mongodb://localhost/YOUR_APP'; // REPLACE THIS
var wrap = require('co-monk');
var monk = require('monk');
var db = monk(mongo);
var YOUR_MODEL = wrap(db.get('YOUR_MODEL'));

/**
 * Expose `snaps`.
 */

module.exports = YOUR_MODEL;  // REPLACE THIS
