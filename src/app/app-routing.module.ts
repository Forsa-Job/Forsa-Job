import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsulterComponent } from './Consulter/consulter/consulter.component';
import { PostesComponent } from './Consulter/postes/postes.component';
import { HomeComponent } from './Home/home/home.component';

const routes: Routes = [{path:"Consulter",component:ConsulterComponent},{path:"",component:HomeComponent},{path:"Postes",component:PostesComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
