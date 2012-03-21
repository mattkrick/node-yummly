'use strict';

var yummly;

describe('recipe', function () {

  before(function (done) {
    search({
      authentication: authentication,
      query: 'chicken'
    }, function (error, response, json) {
      if (error) {
        console.error(error);
      } else if (response.statusCode === 200) {
        recipe({
          authentication: authentication,
          id: json.matches[0].id
        }, function (error, response, json) {
          if (error) {
            console.error(error);
          } else {
            yummly = json;
            done();
          }
        });
      }
    });
  });

  it('should have ingredients', function () {
    expect(yummly.ingredientLines).to.be.an(Array);
  });

});
