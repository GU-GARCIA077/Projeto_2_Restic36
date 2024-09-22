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

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    CarouselComponent,
    SecMeioPComponent,
    DetalhesComponent,
    HomeComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatExpansionModule,
    MatCard,
    MatCardModule,
    CardPComponent,

  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
