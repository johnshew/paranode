var chai = require('chai');
var paranode = require('../main.js')

describe('hello', function() {
  it('returns a string;', function() {
    var result = paranode.hello();
    chai.expect(result).to.equal('Hello World');
  });
});

