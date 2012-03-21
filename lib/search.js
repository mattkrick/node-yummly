'use strict';

var request = require('request');

module.exports = function (options, callback) {

  request({
    url: 'http://api.yummly.com/v1/api/recipes',
    headers: {
      'X-Yummly-App-ID': options.authentication.id,
      'X-Yummly-App-Key': options.authentication.key
    },
    json: true,
    qs: options.query
  }, callback);

};
