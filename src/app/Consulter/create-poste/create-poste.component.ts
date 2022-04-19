import { Component, OnInit } from '@angular/core';

import { SharedService } from 'src/app/Home/shared.service';
import { CreateService } from './create/create.service';


@Component({
  selector: 'app-create-poste',
  templateUrl: './create-poste.component.html',
  styleUrls: ['./create-poste.component.css']
})
export class CreatePosteComponent implements OnInit {

  constructor(private createService:CreateService, private sharedService:SharedService) { }
  
  ngOnInit(): void {
  }
  add(event:Event)
  {
    this.sharedService.sendClickEventCreate();
  }

  
 

  // create(event:Event)
  // {
  //   var nom=<HTMLInputElement> document.getElementById("nom")
  // var prenom=<HTMLInputElement> document.getElementById("prenom")
  // var age=<HTMLInputElement> document.getElementById("age")
  // var date_nessance=<HTMLInputElement> document.getElementById("date_nessance")
  // var email=<HTMLInputElement> document.getElementById("email")
  // var adresse=<HTMLInputElement> document.getElementById("adresse")
  //   console.log("run");
  //   console.log(nom.value);
    
  //   var objet={
      
  //     "nom":nom.value,
  //     "prenom":prenom.value,
  //     "age":age.value,
  //     "date_nes":date_nessance.value,
  //     "email":email.value,
  //     "adresse":adresse.value,

  //   }

  //   this.createPost.createPoste(objet).subscribe((res) =>
  //     {
  //       var data=res
  //       console.log("hiii there");
        
  //       console.log(data)
  //       if (data.message=="Post Created")
  //       {
  //         alert("post created")
  //       }
  //       else
  //       {
  //         alert("errur")
  //       }
  //     })
    
  // }

  createposte(event:Event)
  {
    // var username:any
    
    // this.profilRead.profil(localStorage.getItem('username')).subscribe(res => {

      
      
    // })

    var nom=<HTMLInputElement>document.getElementById("nom")
    var prenom=<HTMLInputElement>document.getElementById("prenom")
    var specialite=<HTMLInputElement>document.getElementById("specialite")
    var niveau_etude=<HTMLInputElement>document.getElementById("niveau_etude")
    var description=<HTMLInputElement>document.getElementById("description")

    var today=new Date();
    var date= today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

    var ob={
    "username":localStorage.getItem('usernmae'),
    "nom":nom.value,
    "prenom":prenom.value,
    "specialite":specialite.value,
    "niveau_etude":niveau_etude.value,
    "description":description.value
    }
    var response:any
    this.createService.create(ob).subscribe(res => {
      response=res
      if(response.message=="poste created")
      {
        alert("poste created")
      }
      else
      {
        alert("erreur")
      }

    })
  }

  changePic(event:Event)
  {
    var filebtn=<HTMLButtonElement>document.getElementById("filebtn");
    filebtn.click()
  }
}
