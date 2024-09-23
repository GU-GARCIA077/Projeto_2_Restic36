import { Injectable } from '@angular/core';
import { ProdInterface } from '../interfaces/prod-interface';

@Injectable({
  providedIn: 'root'
})
export class ProdutosSrvService {

url = 'http://localhost:3000/produtos';
constructor() { }
async  getAllProd(): Promise<ProdInterface[]>{
    const data = await fetch(this.url);
    return data.json();
  }

async getProdById(id: number): Promise<ProdInterface | undefined> {
    const data = await fetch(`${this.url}/${id}`); //sem a crase não funciona a interpolação dos dados da url
    return data.json();
}
}