var should = require('should');
var ello = require('..');

describe('ello', function () {
  it('should get a user', function (done) {
    ello('gct', function (err, data) {
      console.log(JSON.stringify(data));
      done();
    });
  });
});