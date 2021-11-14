import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ['Ironman', 'Spiderman', 'Thor', 'El chavo'];
  heroeBorrado: string = '';

  borrarHeroe(){
    const heroeBorrado = this.heroes.shift() || '';
    this.heroeBorrado = heroeBorrado;
  }

}
