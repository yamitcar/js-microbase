// Libraries
const chai = require('chai');
const expect = chai.expect;
// Imports
const TextAnalyzer = require('../api/services/parentheses.service');

describe('Parenthese', () => {
  it('( should fail', () => {
    let textAnalyzer = new TextAnalyzer();
    let result = textAnalyzer.isValid("(");
    expect(result).to.be.equal(false);
  });

  it('() should success', () => {
    let textAnalyzer = new TextAnalyzer();
    let result = textAnalyzer.isValid("()");
    expect(result).to.be.equal(true);
  });

  it(')( should fail', () => {
    let textAnalyzer = new TextAnalyzer();
    let result = textAnalyzer.isValid(")(");
    expect(result).to.be.equal(false);
  });

  it('()( should fail', () => {
    let textAnalyzer = new TextAnalyzer();
    let result = textAnalyzer.isValid("()(");
    expect(result).to.be.equal(false);
  });

  it('"" should fail', () => {
    let textAnalyzer = new TextAnalyzer();
    let result = textAnalyzer.isValid("");
    expect(result).to.be.equal(true);
  });

  it('(()((())())) should success', () => {
    let textAnalyzer = new TextAnalyzer();
    let result = textAnalyzer.isValid("(()((())()))");
    expect(result).to.be.equal(true);
  });

  it('[] should success', () => {
    let textAnalyzer = new TextAnalyzer();
    let result = textAnalyzer.isValid("[]");
    expect(result).to.be.equal(true);
  });

  it('(] should fail', () => {
    let textAnalyzer = new TextAnalyzer();
    let result = textAnalyzer.isValid("(]");
    expect(result).to.be.equal(false);
  });

  it('([]) should success', () => {
    let textAnalyzer = new TextAnalyzer();
    let result = textAnalyzer.isValid("([])");
    expect(result).to.be.equal(true);
  });

  it('([)] should fail', () => {
    let textAnalyzer = new TextAnalyzer();
    let result = textAnalyzer.isValid("([)]");
    expect(result).to.be.equal(false);
  });

  it('[(]) should fail', () => {
    let textAnalyzer = new TextAnalyzer();
    let result = textAnalyzer.isValid("[(])");
    expect(result).to.be.equal(false);
  });

  it('hola([]) should success', () => {
    let textAnalyzer = new TextAnalyzer();
    let result = textAnalyzer.isValid("hola([])");
    expect(result).to.be.equal(true);
  });

});
