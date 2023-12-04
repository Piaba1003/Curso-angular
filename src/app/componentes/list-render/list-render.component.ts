import { Component } from '@angular/core';
import { Animal } from 'src/app/Animal';
import { ListService } from 'src/app/servicos/list.service';


@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {
    animais: Animal[] = [];
    /*
    { nome: "Larry", tipo: "cachorro", idade: 2}, 
    { nome: "Miau", tipo: "gato", idade: 2},
    { nome: "Anita", tipo: "cachorro", idade: 2},
    { nome: "LItajara", tipo: "cavalo", idade: 2}
  ];
  */

  idadeAnimal: string ='';

  constructor(private listService: ListService) {
    this.getAnimais();
   }
  ngOnInit(): void {
  }
  mostraIdade(animal: Animal) {
    this.idadeAnimal = `${animal.nome}(${animal.tipo}) tem ${animal.idade} anos!`; 
  }

  removeAnimal(animal: Animal) {
    console.log('Removendo animal...')
    //Removendo animal no front-end
    this.animais = this.animais.filter((a) => animal.id !== a.id);
    
    this.listService.remove(animal.id).subscribe();
  }
  getAnimais() {
    //Chamada ao serviço para remover o animal no BD
    this.listService.getAll().subscribe((animais) => (this.animais = animais)); 
  }
  
}
