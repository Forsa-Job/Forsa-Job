import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Home/navbar/navbar.component';
import { HomeComponent } from './Home/home/home.component';
import { ConnectAComponent } from './Home/connect-a/connect-a.component';
import { ConnectBComponent } from './Home/connect-b/connect-b.component';
import { FormsModule } from '@angular/forms';
import { ConsulterComponent } from './Consulter/consulter/consulter.component';
import { NavBarComponent } from './Consulter/nav-bar/nav-bar.component';
import { FiltreComponent } from './Consulter/filtre/filtre.component';
import { PostesComponent } from './Consulter/postes/postes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './Consulter/sidenav/sidenav.component';
import { CreatePosteComponent } from './Consulter/create-poste/create-poste.component';
import { ProfilComponent } from './profil/profil.component';
import { MesPostesComponent } from './mes-postes/mes-postes.component';
import { FavorisComponent } from './favoris/favoris.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ConnectAComponent,
    ConnectBComponent,
    ConsulterComponent,
    NavBarComponent,
    FiltreComponent,
    PostesComponent,
    SidenavComponent,
    CreatePosteComponent,
    ProfilComponent,
    MesPostesComponent,
    FavorisComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
