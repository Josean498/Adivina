import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}


  num: number;

  mayorMenor: string = '...';

  numSecret: number = this.numAleatorio(0,100);

  contador: number = 0;


  numAleatorio(a,b) {
    return Math.round(Math.random()*(b-a) + parseInt (a));
  }

  compruebaNumero() {
    if (this.num) {
      if (this.numSecret < this.num) {
        this.mayorMenor = 'menor';
      } else if (this.numSecret > this.num) {
        this.mayorMenor = 'mayor';
      } else {
        this.mayorMenor = 'igual';
      }
    }
    if (this.contador == 4) {
      alert('Espabila cojone que estás empanao');
    } else if (this.contador == 7) {
      alert('Madre mia que malo eres porra, tienes 5 intentos más');
    } else if (this.contador == 12) {
      alert('Se te acabó el rollo, a reiniciar');
      this.reinicia();
      this.contador = 0;
    }
    
    this.contador++;
  }

  reinicia(){
    // reiniciamos las variables
    this.num = null;
    this.mayorMenor = '...';
    this.numSecret = this.numAleatorio(0,100);
    this.contador = 0;
  }



}