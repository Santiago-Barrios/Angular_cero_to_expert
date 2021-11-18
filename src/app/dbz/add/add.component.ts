import { Component, Input,} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html'
})
export class AddComponent  {

  @Input() new: Personaje = {
    name:'',
    power: 0
  }

  // @Output() onNewCharacter: EventEmitter<Personaje> = new EventEmitter();

  constructor(public dbzService: DbzService){}

  add(){
    if(this.new.name.trim().length === 0){
      return;
    }
    this.dbzService.addCharacter(this.new)
    // this.onNewCharacter.emit(this.new)
    this.new = {
      name: '',
      power: 0
    }
  }


}
