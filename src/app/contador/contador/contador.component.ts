import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <h1>{{ titulo }}</h1>
    <h2>
      la base es: <strong> {{ base }} </strong>
    </h2>

    <button (click)="acumular(base)">+{{ base }}</button>
    <button (click)="acumular(-base)">{{ -base }}</button>
    <button (click)="numero = 0">Reset</button>

    <span> {{ numero }} </span>
  `,
})
export class ContadorComportent {
    public titulo: string = 'Contador App';
    public numero: number =  0;
    public base  : number = 5;
  
    acumular( valor: number ) {
        this.numero += valor;
    }
}
