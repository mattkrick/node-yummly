'use strict';

var
  request = require('request'),
  querystring = require('querystring');

module.exports = function (options, callback) {

  request({
    url: 'http://api.yummly.com/v1/api/recipe/' + querystring.escape(options.id),
    headers: {
      'X-Yummly-App-ID': options.authentication.id,
      'X-Yummly-App-Key': options.authentication.key
    },
    json: true
  }, callback);

};
