import { Component, inject, OnInit } from '@angular/core';
import { ProdInterface } from '../../interfaces/prod-interface';
import { ProdutosSrvService } from '../../services/produtos-srv.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css'],


})
export class DetalhesComponent implements OnInit {
  prod: ProdInterface |undefined ;
  route: ActivatedRoute = inject(ActivatedRoute);
  ProdutosService: ProdutosSrvService = inject(ProdutosSrvService);

  constructor(){}
  ngOnInit(): void {
    const id = Number( this.route.snapshot.params['id']);
    console.log('Produto ID:', id);

    //buscando os dados do produto por id
    this.ProdutosService.getProdById(id).then((produto=>{
      this.prod= produto;
    }))

  }
}