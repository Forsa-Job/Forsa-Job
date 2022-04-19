import { Component, OnInit } from '@angular/core';
import { ProfilReadService } from './service/profil-read.service';
import { UpdateService } from './service/update.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  constructor(private profilRead:ProfilReadService,private updateService:UpdateService) { }

  ngOnInit(): void 
  {
    this.profilRead.profil(localStorage.getItem('username')).subscribe(res => {

      console.log(res);
      console.log(localStorage.getItem('username'));
      
      

      var username=<HTMLInputElement>document.getElementById("username");
      username.value=res.username;
    var nom=<HTMLInputElement>document.getElementById("nom");
      nom.value=res.nom
    var prenom=<HTMLInputElement>document.getElementById("prenom");
      prenom.value=res.prenom
    var sexe=<HTMLSelectElement>document.getElementById("sexe");
      if(res.sexe=="homme")
      sexe.selectedIndex=0
      else
      sexe.selectedIndex=1
    var etatCivil=<HTMLSelectElement>document.getElementById("etat-civil");
      
    var dateNaissance=<HTMLInputElement>document.getElementById("date-naissance");
      dateNaissance.value=res.date_naissance
    var pays=<HTMLSelectElement>document.getElementById("pays");
      
    var adresse=<HTMLInputElement>document.getElementById("adresse");
    adresse.value=res.adresse
    var codePostal=<HTMLInputElement>document.getElementById("code-postal");
    codePostal.value=res.code_postal
    var telMobile=<HTMLInputElement>document.getElementById("tel-mobile");
    telMobile.value=res.tel_mobile
    var telFixe=<HTMLInputElement>document.getElementById("tel-fixe");
    telFixe.value=res.tel_fixe
    var email=<HTMLInputElement>document.getElementById("email");
    email.value=res.email
    var specialite=<HTMLInputElement>document.getElementById("specialite");
    var etablissement=<HTMLInputElement>document.getElementById("etablissement");
    var niveauDetude=<HTMLInputElement>document.getElementById("niveauDetude");
    var updatebtn=<HTMLButtonElement>document.getElementById("update");
    var deletebtn=<HTMLButtonElement>document.getElementById("delete");
    var picbtn=<HTMLButtonElement>document.getElementById("picbtn");
    })

    
  }
  test=true
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
    
    // updatebtn.className="btn btn-success"
    // updatebtn.innerText="save"

    this.test=false
    

  }
  changePic(event:Event)
  {
    var filebtn=<HTMLButtonElement>document.getElementById("filebtn");
    filebtn.click()
  }
  saveUpdate(event:Event)
  {
    var password:any
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
    this.profilRead.profil(localStorage.getItem('username')).subscribe(res => {
      password=res.password;})
    var ob={"username":username.value,
    "nom":nom.value,
    "prenom":prenom.value,
    "email":email.value,
    "password":password,
    "date_naissance":dateNaissance.value,
    "sexe":"homme",
    "pays":pays.value,
    "adresse":adresse.value,
    "code_postal":codePostal.value,
    "tel_mobile":telMobile.value,
    "tel_fixe":telFixe.value}

    var response:any
    this.updateService.update(ob).subscribe(res => {
      response=res
      if(response.message=="account updated")
      {
        alert("account updated")
      }
      else
      {
        alert("erreur")
      }
    })
    this.test=true

    username.disabled=true;
    nom.disabled=true;
    prenom.disabled=true;
    sexe.disabled=true;
    etatCivil.disabled=true;
    dateNaissance.disabled=true
    pays.disabled=true;
    adresse.disabled=true;
    codePostal.disabled=true;
    telMobile.disabled=true;
    telFixe.disabled=true;
    email.disabled=true;
    specialite.disabled=true;
    etablissement.disabled=true;
    niveauDetude.disabled=true;

  }
}
