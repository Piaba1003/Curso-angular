import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Animal } from 'src/app/Animal';
import { ListService } from 'src/app/servicos/list.service';

@Component({
  selector: 'app-detalhes-item',
  templateUrl: './detalhes-item.component.html',
  styleUrls: ['./detalhes-item.component.css']
})
export class DetalhesItemComponent {
  animal?: Animal;

  constructor (private listService: ListService, private route: ActivatedRoute){
  this.getAnimal();
}

getAnimal() { 
  const id = Number(this.route.snapshot.paramMap.get("id"));
  this.listService.getItem(id).subscribe((animal) => (this.animal = animal));
}
}