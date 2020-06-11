import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PrimariaComponent } from './secciones/primaria/primaria.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'primaria', component:PrimariaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
