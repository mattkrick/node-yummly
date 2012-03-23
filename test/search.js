'use strict';

var search;

describe('search', function () {

  it('should be fast', function (done) {
    yummly.search({
      authentication: authentication,
      query: 'chicken'
    }, function (error, response, json) {
      if (error) {
        console.error(error);
      } else if (response.statusCode === 200) {
        search = json;
        done();
      }
    });
  });

  it('should return 40 recipes', function () {
    expect(search.matches.length).to.be(40);
  });

});
