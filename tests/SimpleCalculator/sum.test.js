const SimpleCalculator = require('../../js/SimpleCalculator');

describe('SimpleCalculator - sum()', function() {
  it('should sum values of inputted array', function() {
    const values = [ 1, 2, 3, 4, 5 ];

    expect(SimpleCalculator.sum(values)).toBe(15);
  });
  
  it('should not allow undefined input', function() {
    expect(function() {
      SimpleCalculator.sum();
    }).toThrow();
  });
  
  it('should not allow null input', function() {
    expect(function() {
      SimpleCalculator.sum(null);
    }).toThrow();
  });
  
  it('should not allow string input', function() {
    expect(function() {
      SimpleCalculator.sum('thisisastring');
    }).toThrow();
  });
  
  it('should not allow array of non-numerical values', function() {
    expect(function() {
      SimpleCalculator.sum([ 'abc', function() {}, [] ]);
    }).toThrow();
  });
});
