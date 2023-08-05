import { Component } from '@angular/core';
import { ListService } from 'src/app/service/list.service';
import { Animal } from 'src/app/interface/Animal';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {

  animals:Animal[] = [];

  constructor(private listservice: ListService){
   this.getAnimals()
  }

  getAnimals(): void{
    this.listservice.getAll().subscribe((animals) => (this.animals = animals));
  }

}
