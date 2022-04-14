import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsulterComponent } from './Consulter/consulter/consulter.component';
import { PostesComponent } from './Consulter/postes/postes.component';
import { HomeComponent } from './Home/home/home.component';
import { RegisterComponent } from './Home/register/register.component';
import { ProfilComponent } from './profil/profil.component';

const routes: Routes = [{path:"Consulter",component:ConsulterComponent},{path:"",component:HomeComponent},{path:"Postes",component:PostesComponent},{path:"profil",component:ProfilComponent},{path:"Register",component:RegisterComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
