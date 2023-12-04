import { Injectable } from '@angular/core';
import { Animal } from  '../Animal';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contato } from '../contato';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private apiUrl = 'http://localhost:3000/animais'
  private apiUrlContatos = 'http://localhost:3000/contatos';

  constructor(private http: HttpClient) { }

  /*remove(animais: Animal[], animal: Animal) {
    console.log('Ativando serviço...')
    return animais.filter((a) => animal.nome !== a.nome);
  }
  */
  getAll():Observable<Animal[]> {
    return this.http.get<Animal[]>(this.apiUrl);
  }
  getItem(id:number):Observable<Animal> {
    return this.http.get<Animal>(`${this.apiUrl}/${id}`);
  }
  setItem(animal: Animal):Observable<Animal> {
    return this.http.post<Animal>(this.apiUrl,animal);
  }
  remove(id:number) {
    return this.http.delete<Animal>(`${this.apiUrl}/${id}`);
  }
  setContato(contato: Contato):Observable<Contato> {
    return this.http.post<Contato>(this.apiUrlContatos,contato);
    }
}
