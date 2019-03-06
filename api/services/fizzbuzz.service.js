"use strict";

class FizzBuzz {

  findResult(number){
    let result = "";
    if(this.isFizz(number)){
      result += "Fizz";
    }
    if(this.isBuzz(number)){
      result += "Buzz";
    }
    if(result === ""){
      result = number;
    }
    return result;
  }

  isFizz(number){
    return number % 3 === 0;
  }

  isBuzz(number){
    return number % 5 === 0;
  }

}


module.exports = FizzBuzz;
