'use strict';

var
  search = require('search'),
  recipe = require('recipe'),
  authentication = {
    id: '3cbb14d1',
    key: '6eed2ccd0ec397588fa29dfbe3becd78'
  },
  query = 'chicken';

function getRecipe(id) {

  recipe({
    authentication: authentication,
    id: id
  }, function (error, response, json) {
    if (error) {
      console.error(error);
    } else {
      console.log('Yummly recipe:', json.name);
    }
  });

}

search({
  authentication: authentication,
  query: query
}, function (error, response, json) {
  if (error) {
    console.error(error);
  } else if (response.statusCode === 200) {
    console.log('Yummly search:', json.totalMatchCount, query, 'recipes');
    getRecipe(json.matches[0].id);
  }
});

