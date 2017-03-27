const SimpleCalculator = require('../../js/SimpleCalculator');

describe('SimpleCalculator - addOne()', function() {
  it('should add one to inputted value', function() {
    expect(SimpleCalculator.addOne(4)).toBe(5);
  });
  
  it('should not allow undefined input', function() {
    expect(function() {
      SimpleCalculator.addOne();
    }).toThrow();
  });
  
  it('should not allow null input', function() {
    expect(function() {
      SimpleCalculator.addOne(null);
    }).toThrow();
  });
  
  it('should not allow string input', function() {
    expect(function() {
      SimpleCalculator.addOne('thisisastring');
    }).toThrow();
  });
});