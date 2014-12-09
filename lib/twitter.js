
/**
 * Module dependencies.
 */

var thunkify = require('thunkify-wrap');
var Twitter = require('simple-twitter');

/**
 * Twitter credentials
 */

var config = {
  consumerKey: process.env.TWITTER_CONSUMER_KEY,
  consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
  accessToken: process.env.TWITTER_ACCESS_TOKEN_KEY,
  accessTokenSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET
};

/**
 * Expose thunkified Twitter client.
 */

module.exports = thunkify(new Twitter(
  config.consumerKey,
  config.consumerSecret,
  config.accessToken,
  config.accessTokenSecret
));
