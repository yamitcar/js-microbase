// Libraries
const chai = require('chai');
const expect = chai.expect;
// Imports
const FizzBuzz = require('../api/services/fizzbuzz.service.js');

describe('FizzBuzz', () => {
  it('1', () => {
    let fizzBuzz = new FizzBuzz();
    let result = fizzBuzz.findResult(1);
    expect(result).to.be.equal(1);
  });

  it('2', () => {
    let fizzBuzz = new FizzBuzz();
    let result = fizzBuzz.findResult(2);
    expect(result).to.be.equal(2);
  });

  it('3 -> Fizz', () => {
    let fizzBuzz = new FizzBuzz();
    let result = fizzBuzz.findResult(3);
    expect(result).to.be.equal("Fizz");
  });

  it('4', () => {
    let fizzBuzz = new FizzBuzz();
    let result = fizzBuzz.findResult(4);
    expect(result).to.be.equal(4);
  });

  it('5 -> Buzz', () => {
    let fizzBuzz = new FizzBuzz();
    let result = fizzBuzz.findResult(5);
    expect(result).to.be.equal("Buzz");
  });

  it('6 -> Fizz', () => {
    let fizzBuzz = new FizzBuzz();
    let result = fizzBuzz.findResult(6);
    expect(result).to.be.equal("Fizz");
  });

  it('7', () => {
    let fizzBuzz = new FizzBuzz();
    let result = fizzBuzz.findResult(7);
    expect(result).to.be.equal(7);
  });

  it('8', () => {
    let fizzBuzz = new FizzBuzz();
    let result = fizzBuzz.findResult(8);
    expect(result).to.be.equal(8);
  });

  it('9 -> Fizz', () => {
    let fizzBuzz = new FizzBuzz();
    let result = fizzBuzz.findResult(9);
    expect(result).to.be.equal("Fizz");
  });

  it('10 -> Buzz', () => {
    let fizzBuzz = new FizzBuzz();
    let result = fizzBuzz.findResult(10);
    expect(result).to.be.equal("Buzz");
  });

  it('11', () => {
    let fizzBuzz = new FizzBuzz();
    let result = fizzBuzz.findResult(11);
    expect(result).to.be.equal(11);
  });

  it('12 -> Fizz', () => {
    let fizzBuzz = new FizzBuzz();
    let result = fizzBuzz.findResult(12);
    expect(result).to.be.equal("Fizz");
  });

  it('13', () => {
    let fizzBuzz = new FizzBuzz();
    let result = fizzBuzz.findResult(13);
    expect(result).to.be.equal(13);
  });

  it('14', () => {
    let fizzBuzz = new FizzBuzz();
    let result = fizzBuzz.findResult(14);
    expect(result).to.be.equal(14);
  });

  it('15 -> FizzBuzz', () => {
    let fizzBuzz = new FizzBuzz();
    let result = fizzBuzz.findResult(15);
    expect(result).to.be.equal("FizzBuzz");
  });


});
