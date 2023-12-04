import { Component } from '@angular/core';

@Component({
  selector: 'app-if-reder',
  templateUrl: './if-reder.component.html',
  styleUrls: ['./if-reder.component.css']
})
export class IfRederComponent {
  mostrar = true;
  nome: string = 'Luis Gustavo';
  constructor() {}

  ngOnInit(): void { 
  
  }
}
