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

  it('should have an ingredient', function () {
    expect(yummly.ingredientLines).to.be.an(Array);
    expect(yummly.ingredientLines[0]).to.be.ok();
    console.log(yummly.ingredientLines[0]);
  });

  it('should have calories', function () {
    expect(yummly.nutritionEstimates).to.be.an(Array);
    expect(yummly.nutritionEstimates[0].attribute).to.equal('ENERC_KCAL');
    console.log(yummly.nutritionEstimates[0].unit.plural + ':', yummly.nutritionEstimates[0].value);
  });

  it('should have images', function () {
    expect(yummly.images).to.be.an(Array);
  });

  it('should have a small image', function () {
    expect(yummly.images[0].hostedSmallUrl).to.be.ok();
    console.log(yummly.images[0].hostedSmallUrl);
  });

  it('should have a large image', function () {
    expect(yummly.images[0].hostedLargeUrl).to.be.ok();
    console.log(yummly.images[0].hostedLargeUrl);
  });

});
