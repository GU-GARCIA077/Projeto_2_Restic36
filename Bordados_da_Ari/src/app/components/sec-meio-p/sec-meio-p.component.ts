import { Component, OnInit,ChangeDetectionStrategy, signal, inject} from '@angular/core';
import { CardPComponent } from '../card-p/card-p.component';
import { ProdInterface } from '../../interfaces/prod-interface';
import { ProdutosSrvService } from '../../services/produtos-srv.service';



@Component({
  selector: 'app-sec-meio-p',
  templateUrl: './sec-meio-p.component.html',
  styleUrl: './sec-meio-p.component.css',
  changeDetection:ChangeDetectionStrategy.OnPush,
})
export class SecMeioPComponent implements OnInit {
  readonly panelOpenState = signal(false);
  prodList: ProdInterface[] =[];
  prodService: ProdutosSrvService = inject(ProdutosSrvService);

  constructor(){
    this.prodList =this.prodService.getAllProd();
  }
  ngOnInit(): void {}
}
