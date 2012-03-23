'use strict';

var yummly;

describe('search', function () {

  it('should be fast', function (done) {
    search({
      authentication: authentication,
      query: 'chicken'
    }, function (error, response, json) {
      if (error) {
        console.error(error);
      } else if (response.statusCode === 200) {
        yummly = json;
        done();
      }
    });
  });

  it('should return 40 recipes', function () {
    expect(yummly.matches.length).to.be(40);
  });

});
