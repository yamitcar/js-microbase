// Libraries
const chai = require('chai');
const expect = chai.expect;
// Imports
const Calculator = require('../api/services/calculator.service');

describe('Test service: Calculator', () => {
  describe('Test method: plus', () => {
    it('5 + 5 = 10', () => {
      let calculator = new Calculator();
      let response = calculator.plus(5, 5);
      expect(response).to.equal(10);
    }),
    it('4 + 3 = 7', () => {
      let calculator = new Calculator();
      let response = calculator.plus(4, 3);
      expect(response).to.equal(7);
    });
  });
});
