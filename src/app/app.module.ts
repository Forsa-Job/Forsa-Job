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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
