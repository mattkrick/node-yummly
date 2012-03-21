Yummly API Module for Node.js
-----------------------------------------------------------------

1.) Register an account at [http://developer.yummly.com/](http://developer.yummly.com/).

    var authentication = {
      id: '********',
      key: '********************************'
    }

2.) Require the search/recipe modules.

    var
      search = require('yummly/search'),
      recipe = require('yummly/recipe');

3.) Call search/recipe function and have fun with [Yummly's JSON object](http://developer.yummly.com/wiki)!

Search:

    search({
      authentication: authentication,
      query: 'chicken'
    }, function (error, response, json) {
      if (error) {
        console.error(error);
      } else if (response.statusCode === 200) {
        console.log(json);
      }
    });

Recipe:

    search({ // calling search first to get a recipe id
      authentication: authentication,
      query: 'pasta'
    }, function (error, response, json) {
      if (error) {
        console.error(error);
      } else if (response.statusCode === 200) {
        recipe({
          authentication: authentication,
          id: json.matches[0].id // id of the first recipe returned by search
        }, function (error, response, json) {
          if (error) {
            console.error(error);
          } else {
            console.log(json);
          }
        });
      }
    });
