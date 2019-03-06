"use strict";

class TextAnalyzer {

  constructor(){
    this.values = {"(" : 1, ")": -1,"[": 2, "]": -2}
    this.rules = {2 : -1, 1 : -2}
    this.previousValue = 0
    this.actualValue = 0
    this.breakARule = false
  }

 isValid(text){
   this.counter = 0
    for(let i = 0; i < text.length; i++){
      this.processCharacter(text[i])
      if(this.isCloseBeforeOpen() || this.breakARule){
        return false
      }
     }
   return this.wasCompile()
 }


 isCloseBeforeOpen(){
   return this.counter < 0
 }

 processCharacter(character){
   this.actualValue = this.getValue(character)
   this.wasBreakTheRule()
   this.counter += this.actualValue
   this.previousValue = this.actualValue
 }

 getValue(character){
    return this.values[character] === undefined ? 0 : this.values[character]
 }

 wasBreakTheRule(){
    this.breakARule = this.rules[this.previousValue] === this.actualValue
 }

 wasCompile(){
   return this.counter === 0
 }

}


module.exports = TextAnalyzer;
