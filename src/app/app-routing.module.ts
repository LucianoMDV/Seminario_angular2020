import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DulcineaContactoComponent } from './dulcinea-contacto/dulcinea-contacto.component';
import { DulcineaHomeComponent } from './dulcinea-home/dulcinea-home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    component: DulcineaHomeComponent},
  {
    path: 'contacto',
    component: DulcineaContactoComponent},
  {
    path: '**',
    redirectTo: 'inicio'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
