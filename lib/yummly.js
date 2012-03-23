'use strict';

var
  request = require('request'),
  pathRoot = 'http://api.yummly.com/v1/api/';

module.exports = {
  search: function (options, callback) {
    request({
      url: pathRoot + 'recipes',
      headers: {
        'X-Yummly-App-ID': options.authentication.id,
        'X-Yummly-App-Key': options.authentication.key
      },
      json: true,
      qs: options.query
    }, callback);
  },
  recipe: function (options, callback) {
    request({
      url: pathRoot + 'recipe/' + options.id,
      headers: {
        'X-Yummly-App-ID': options.authentication.id,
        'X-Yummly-App-Key': options.authentication.key
      },
      json: true
    }, callback);
  }
};
