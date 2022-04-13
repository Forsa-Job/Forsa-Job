import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
    
  }
  update(event:Event)
  {
    var username=<HTMLInputElement>document.getElementById("username");
    var nom=<HTMLInputElement>document.getElementById("nom");
    var prenom=<HTMLInputElement>document.getElementById("prenom");
    var sexe=<HTMLSelectElement>document.getElementById("sexe");
    var etatCivil=<HTMLSelectElement>document.getElementById("etat-civil");
    var dateNaissance=<HTMLInputElement>document.getElementById("date-naissance");
    var pays=<HTMLSelectElement>document.getElementById("pays");
    var adresse=<HTMLInputElement>document.getElementById("adresse");
    var codePostal=<HTMLInputElement>document.getElementById("code-postal");
    var telMobile=<HTMLInputElement>document.getElementById("tel-mobile");
    var telFixe=<HTMLInputElement>document.getElementById("tel-fixe");
    var email=<HTMLInputElement>document.getElementById("email");
    var specialite=<HTMLInputElement>document.getElementById("specialite");
    var etablissement=<HTMLInputElement>document.getElementById("etablissement");
    var niveauDetude=<HTMLInputElement>document.getElementById("niveauDetude");
    var updatebtn=<HTMLButtonElement>document.getElementById("update");
    var deletebtn=<HTMLButtonElement>document.getElementById("delete");
    var picbtn=<HTMLButtonElement>document.getElementById("picbtn");
    

    username.disabled=false;
    nom.disabled=false;
    prenom.disabled=false;
    sexe.disabled=false;
    etatCivil.disabled=false;
    dateNaissance.disabled=false
    pays.disabled=false;
    adresse.disabled=false;
    codePostal.disabled=false;
    telMobile.disabled=false;
    telFixe.disabled=false;
    email.disabled=false;
    specialite.disabled=false;
    etablissement.disabled=false;
    niveauDetude.disabled=false;


    picbtn.disabled=false;
    

    updatebtn.className="btn btn-success"
    updatebtn.innerText="save"

  }
  changePic(event:Event)
  {
    var filebtn=<HTMLButtonElement>document.getElementById("filebtn");
    filebtn.click()
  }
}
