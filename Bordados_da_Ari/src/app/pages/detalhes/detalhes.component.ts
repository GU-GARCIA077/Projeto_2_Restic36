import { Component, inject } from '@angular/core';
import { ProdInterface } from '../../interfaces/prod-interface';
import { ProdutosSrvService } from '../../services/produtos-srv.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrl: './detalhes.component.css',

})
export class DetalhesComponent {
  prod:ProdInterface |undefined ;
  route: ActivatedRoute = inject(ActivatedRoute);
  ProdutosService: ProdutosSrvService = inject(ProdutosSrvService);

  constructor(){
    const prodId = Number( this.route.snapshot.params['id']);
    console.log('Produto ID:',prodId);

    this.ProdutosService.getProdById(prodId).then((produto: ProdInterface |undefined)=>{
      this.prod = produto;
      console.log('Produto',this.prod);
    })
  }

}
