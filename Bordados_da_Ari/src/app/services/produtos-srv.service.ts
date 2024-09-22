import { Injectable } from '@angular/core';
import { ProdInterface } from '../interfaces/prod-interface';

@Injectable({
  providedIn: 'root'
})
export class ProdutosSrvService {
  prodList: ProdInterface[] =[
    {
      "id": 1,
      "titulo": "Conjunto Toalha Casal ",
      "subtitulo": "Banho + rosto",
      "image": "/assets/images/Conjunto.png",
      "descricao": "O conjunto perfeito para você ! Contém 2 toalhas de banho e uma de rosto, personalizadas conforme solicitado.Garanta já o seu, faça-nos uma encomenda.",
      "valor": 130
    },
    {
      "id": 2,
      "titulo": "Conjunto Toalhas infantis ",
      "subtitulo": "kit com 4 de rosto",
      "image": "/assets/images/kitInfantil.png",
      "descricao": "O conjunto perfeito para sua criança ! Contém um kit de 4 toalhas de rosto, personalizadas com desenhos que a criançada adora.Garanta já o seu ,faça-nos uma encomenda.",
      "valor": 80
    },
    {
      "id": 3,
      "titulo": "Quadro Decorativo",
      "subtitulo": "Bordado + Moldura",
      "image": "/assets/images/Quadro.png",
      "descricao": "A perfeição existe e podemos provar ! Contém um lindo bordado emoldurado em um quadro, personalizado como o cliente desejar.Garanta já o seu ,faça-nos uma encomenda.",
      "valor": 150
    },
    {
      "id": 4,
      "titulo": "Capa para almofada",
      "subtitulo": "Capa bordada + almofada",
      "image": "/assets/images/CapaAlmofada.png",
      "descricao": "Lindas capas bordadas em ponto cruz ! Personalizado como o cliente desejar, com nomes , frases e desenhos.Garanta já o seu ,faça-nos uma encomenda.",
      "valor": 70
    },
    {
      "id": 5,
      "titulo": "Caminho de Mesa",
      "subtitulo": "Enfeite para mesa",
      "image": "/assets/images/caminhodemesa.png",
      "descricao": "Lindos caminhos bordados em ponto cruz ! Personalizado como o cliente desejar.Garanta já o seu ,faça-nos uma encomenda.",
      "valor": 45
    },
    {
      "id": 6,
      "titulo": "Panos de prato",
      "subtitulo": "Unidades",
      "image": "/assets/images/panoPrato.png",
      "descricao": "Lindos panos de prato bordados em ponto cruz ! Personalizado como o cliente desejar.Garanta já o seu ,faça-nos uma encomenda.",
      "valor": 10
    },
  ];
  
  constructor() { }
  getAllProd():ProdInterface[]{
    return this.prodList;
  }
  getProdById(id:number):ProdInterface | undefined{
    return this.prodList.find(prod => prod.id ===id);

  }
}
