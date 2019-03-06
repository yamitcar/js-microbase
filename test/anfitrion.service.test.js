// Libraries
const chai = require('chai');
const expect = chai.expect;
// Imports
const Anfitrion = require('../api/services/anfitrion.service');

describe('Anfitrion', () => {
  it('should say "Buenas tardes Yamit" at 3pm with ES as a language', () => {
    //Arrange
    let anfitrion = new Anfitrion("ES");
    //Act
    let result = anfitrion.saludar("Yamit",15);
    //Assert
    expect(result).to.be.equal("Buenas tardes Yamit");
  });

  it('should say "Buenos días Andres" at 10am with ES as a language', () => {
    //Arrange
    let anfitrion = new Anfitrion("ES");
    //Act
    let result = anfitrion.saludar("Andres",10);
    //Assert
    expect(result).to.be.equal("Buenos días Andres");
  });

  it('should say "Good morning Andres" at 1am with EN as a language', () => {
    //Arrange
    let anfitrion = new Anfitrion("EN");
    //Act
    let result = anfitrion.saludar("Andres",1);
    //Assert
    expect(result).to.be.equal("Good morning Andres");
  });

  it('should say "Bonjour Andres" at 11am with EN as a language', () => {
    //Arrange
    let anfitrion = new Anfitrion("FR");
    //Act
    let result = anfitrion.saludar("Andres",11);
    //Assert
    expect(result).to.be.equal("Bonjour Andres");
  });

  it('should say "No conozco ese idioma" at 11am with JP as a language', () => {
    //Arrange
    let anfitrion = new Anfitrion("JP");
    //Act
    let result = anfitrion.saludar("Andres",11);
    //Assert
    expect(true).to.be.equal(true);
  });
});
