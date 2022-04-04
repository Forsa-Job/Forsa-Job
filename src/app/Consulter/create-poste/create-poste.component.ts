import { Component, OnInit } from '@angular/core';

import { SharedService } from 'src/app/Home/shared.service';
import { CreateService } from './create/create.service';

@Component({
  selector: 'app-create-poste',
  templateUrl: './create-poste.component.html',
  styleUrls: ['./create-poste.component.css']
})
export class CreatePosteComponent implements OnInit {

  constructor(private sharedService:SharedService,private createPost:CreateService) { }
  
  ngOnInit(): void {
  }
  add(event:Event)
  {
    this.sharedService.sendClickEventCreate();
  }

  
 

  create(event:Event)
  {
    var nom=<HTMLInputElement> document.getElementById("nom")
  var prenom=<HTMLInputElement> document.getElementById("prenom")
  var age=<HTMLInputElement> document.getElementById("age")
  var date_nessance=<HTMLInputElement> document.getElementById("date_nessance")
  var email=<HTMLInputElement> document.getElementById("email")
  var adresse=<HTMLInputElement> document.getElementById("adresse")
    console.log("run");
    console.log(nom.value);
    
    var objet={
      "nom":nom.value,
      "prenom":prenom.value,
      "age":age.value,
      "date_nessance":date_nessance.value,
      "email":email.value,
      "adresse":adresse.value,

    }

    this.createPost.createPoste(objet).subscribe(res =>
      {
        var data=res
        console.log(data)
        if (data.message=="Post Created")
        {
          alert("post created")
        }
        else
        {
          alert("errur")
        }
      })
    
  }
}
