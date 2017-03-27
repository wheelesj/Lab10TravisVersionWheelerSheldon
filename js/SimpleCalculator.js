function isInvalidNumericalValue(value) {
  return !value || isNaN(value);
}


class SimpleCalculator {
  /**
   * addOne                 
   * Returns the inputted numerical value increased by 1
   * @static
   * @param {Number} value
   * @returns {Number} increasedValue
   * 
   * @memberOf SimpleCalculator
   */
  static addOne(value) {
    if (isInvalidNumericalValue(value)) {
      throw new Error('The addOne method requires a valid number input');
    }

    return value + 1;
  }

  /**
   * subtractOne
   * Returns the inputted numerical value decreased by 1
   * @static
   * @param {Number} value
   * @returns {Number} decreasedValue
   * 
   * @memberOf SimpleCalculator
   */  
  static subtractOne(value) {
    if (isInvalidNumericalValue(value)) {
      throw new Error('The subtractOne method requires a valid number input');
    }

    return value - 1;
  }

  /**
   * sum
   * Return the sum of an array of numerical values
   * @static
   * @param {Number[]} values 
   * @returns {Number} sumOfValues
   * 
   * @memberOf SimpleCalculator
   */
  static sum(values) {
	var intTotal =0;
	
	
	
	for(var intElements =0; intElements < values.length; intElements++)
	{
	
		intTotal += values[intElements];
	
	
	}
	 if (isInvalidNumericalValue(intTotal)) {
      throw new Error('The sum method requires a valid number input');
    }

		return intTotal;
		
		
  }
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = SimpleCalculator;
}