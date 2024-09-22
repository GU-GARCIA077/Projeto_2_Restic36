import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { ProdInterface } from '../../interfaces/prod-interface';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-card-p',
  templateUrl: './card-p.component.html',
  styleUrl: './card-p.component.css',
  standalone: true,
  imports: [MatButtonModule,MatCardModule,RouterModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardPComponent {
  @Input() prodData!: ProdInterface;
  
}
