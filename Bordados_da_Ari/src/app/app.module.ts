import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { MatCard,MatCardModule} from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { SecMeioPComponent } from './components/sec-meio-p/sec-meio-p.component';
import { CardPComponent } from './components/card-p/card-p.component';
import { DetalhesComponent } from './pages/detalhes/detalhes.component';
import { HomeComponent } from './pages/home/home.component';
import { LocalizacaoComponent } from './components/localizacao/localizacao.component';
import { ContatosComponent } from './components/contatos/contatos.component';
import { RodapeComponent } from './components/rodape/rodape.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormGroupDirective, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { ErrorStateMatcher } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    CarouselComponent,
    SecMeioPComponent,
    DetalhesComponent,
    HomeComponent,
    LocalizacaoComponent,
    ContatosComponent,
    RodapeComponent,
    NewsletterComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatExpansionModule,
    MatCard,
    MatCardModule,
    CardPComponent,
    FormsModule,
    ReactiveFormsModule,
  
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
