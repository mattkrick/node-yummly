'use strict';

var yummly;

describe('recipe', function () {

  it('should be fast', function (done) {
    recipe({
      authentication: authentication,
      id: 'Meyer-Lemon-Semifreddo-With-Summer-Berries-Epicurious'
    }, function (error, response, json) {
      if (error) {
        console.error(error);
      } else {
        yummly = json;
        done();
      }
    });
  });

  it('should have an id', function () {
    expect(yummly.id).to.be.ok();
    console.log(yummly.id);
  });

  it('should have a name', function () {
    expect(yummly.name).to.be.ok();
    console.log(yummly.name);
  });

  it('should have ingredients', function () {
    expect(yummly.ingredientLines).to.be.an(Array);
    console.log(yummly.ingredientLines);
  });

  it('should have nutrition estimates', function () {
    expect(yummly.nutritionEstimates).to.be.an(Array);
    console.log(yummly.nutritionEstimates);
  });

  it('should have images', function () {
    expect(yummly.images).to.be.an(Array);
    console.log(yummly.images);
  });

  it('should have a small image', function () {
    expect(yummly.images[0].hostedSmallUrl).to.be.ok();
    console.log(yummly.images[0].hostedSmallUrl);
  });

});
