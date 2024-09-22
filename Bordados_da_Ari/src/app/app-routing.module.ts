import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalhesComponent } from './pages/detalhes/detalhes.component';
import { AppComponent } from './app.component';
import path from 'path';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component:HomeComponent,
    title: 'Home'
  },
  {
    path:'detalhes/:id',
    component:DetalhesComponent,
    title:"detalhes"

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
