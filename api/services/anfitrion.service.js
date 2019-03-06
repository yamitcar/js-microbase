"use strict";

class Anfitrion {

  constructor(idioma = "ES"){
    this.idioma = idioma;
  }

  saludar(persona="mundo", hour = new Date().getHours()){

    switch (true) {
      case (hour > 18):
        if(this.idioma === "ES"){
          return "Buenas noches " + persona;
        }else if(this.idioma === "EN"){
          return "Good evening " + persona;
        }else if(this.idioma === "FR"){
          return "bonne nuit " + persona;
        }
        else{
          return "No conozco ese idioma";
        }
      case (hour > 12):
        if(this.idioma === "ES"){
          return "Buenas tardes " + persona;
        }else if(this.idioma === "EN"){
          return "Good afternoon " + persona;
        }else if(this.idioma === "FR"){
          return "Bonsoir " + persona;
        }
        else{
          return "No conozco ese idioma";
        }
      case (hour>0):
        if(this.idioma === "ES"){
          return "Buenos días " + persona;
        }else if(this.idioma === "EN"){
          return "Good morning " + persona;
        }else if(this.idioma === "FR"){
          return "Bonjour " + persona;
        }
        else {
          return "No conozco ese idioma";
        }
    }
  }
}


module.exports = Anfitrion;
