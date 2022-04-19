import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../service/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private registerService:RegisterService) {
    this.getcountrycode()
  }

  ngOnInit(): void {
  }
  codes: any;
  theme: any;
  getcountrycode() {
    fetch("/assets/number.json").then(res => {
        var data = res.json().then(data => {
          this.codes = data
          
          
        })
      })
      .catch(() => {
        alert("erreur")
      })
  }
  isnumber(ch: string) {
    var test: any
    if ((ch != "")) {
      for (var i = 0; i < ch.length; i++) {
        if ((ch.charAt(i) == "0") || (ch.charAt(i) == "1") || (ch.charAt(i) == "2") || (ch.charAt(i) == "3") || (ch.charAt(i) == "4") || (ch.charAt(i) == "5") || (ch.charAt(i) == "6") || (ch.charAt(i) == "7") || (ch.charAt(i) == "8") || (ch.charAt(i) == "9")) {
          test = true
        } else {
          test = false
          break
        }


      }

    }
    return test
  }
  isString(ch: string) {
    var test: any
    for (var i = 0; i < ch.length; i++) {
      if (((ch.charAt(i) >= 'a') && (ch.charAt(i) <= 'z')) || ((ch.charAt(i) >= 'A') && (ch.charAt(i) <= 'Z')) && (this.isnumber(ch) == false)) {
        test = true
      } else {
        test = false

      }
    }
    return test
  }
  isnumberstring(ch:String)
{
  var test: any
  for (var i = 0; i < ch.length; i++) {
    if (((ch.charAt(i) >= 'a') && (ch.charAt(i) <= 'z')) || ((ch.charAt(i) >= 'A') && (ch.charAt(i) <= 'Z'))||((ch.charAt(i) == "0") || (ch.charAt(i) == "1") || (ch.charAt(i) == "2") || (ch.charAt(i) == "3") || (ch.charAt(i) == "4") || (ch.charAt(i) == "5") || (ch.charAt(i) == "6") || (ch.charAt(i) == "7") || (ch.charAt(i) == "8") || (ch.charAt(i) == "9"))) 
    {
      test = true
    } else {
      test = false
break
    }
  }
  return test

}
isnumberstringpoint(ch:String)
{
  var test: any
  for (var i = 0; i < ch.length; i++) {
    if (((ch.charAt(i) >= 'a') && (ch.charAt(i) <= 'z')) || ((ch.charAt(i) >= 'A') && (ch.charAt(i) <= 'Z'))||((ch.charAt(i) == "0") || (ch.charAt(i) == "1") || (ch.charAt(i) == "2") || (ch.charAt(i) == "3") || (ch.charAt(i) == "4") || (ch.charAt(i) == "5") || (ch.charAt(i) == "6") || (ch.charAt(i) == "7") || (ch.charAt(i) == "8") || (ch.charAt(i) == "9")|| (ch.charAt(i) == "."))) 
    {
      test = true
    } else {
      test = false
break
    }
  }
  return test

}
isstringpoint(ch:String)
{
  var test: any
  for (var i = 0; i < ch.length; i++) {
    if (((ch.charAt(i) >= 'a') && (ch.charAt(i) <= 'z')) || ((ch.charAt(i) >= 'A') && (ch.charAt(i) <= 'Z'))|| (ch.charAt(i) == "."))
    {
      test = true
    } else {
      test = false
break
    }
  }
  return test

}
email(e:Event)
{ var ch:any;
  var ch1:any;
  var ch2:any;
  var n:any;
  var email = < HTMLInputElement > document.getElementById("email");
  var p10 = < HTMLParagraphElement > document.getElementById("p10");

var expressionReguliere = /^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
if( email.value!=""){
if (expressionReguliere.test(email.value))
{
 email.className = "form-control is-valid"
p10.innerHTML = " valide";
p10.style.color ="green";
}
else
{email.className = "form-control is-invalid"
p10.innerHTML =" invalide";
p10.style.color = "red";
}
}else
{
  email.className = "form-control is-invalid"
  p10.innerText = "champs obligatoire*"
  p10.style.color = "red"

}


}



  verifCemail(e: Event) {
    var email = < HTMLInputElement > document.getElementById("email");
    var cemail = < HTMLInputElement > document.getElementById("cemail");

    var p1 = < HTMLParagraphElement > document.getElementById("p1");
    if( cemail.value!=""){
    if (email.value == cemail.value) {

      cemail.className = "form-control is-valid"

      p1.innerText = "valide"
      p1.style.color = "green"
    } else if ((email.value != cemail.value) && (cemail.value != "")) {
      cemail.className = "form-control is-invalid"
      p1.innerText = "invalide"
      p1.style.color = "red"
    } else if(cemail.value=="")
    {
     cemail.className = "form-control is-invalid"
     p1.innerText = "champs obligatoire*"
     p1.style.color = "red"
    }}else
    {  cemail.className = "form-control is-invalid"
    p1.innerText = "champs obligatoire*"
    p1.style.color = "red"

    }
  }
  verifcpass(e: Event) {
    var password = < HTMLInputElement > document.getElementById("password");
    var cpassword = < HTMLInputElement > document.getElementById("cpassword");
    var p2 = < HTMLParagraphElement > document.getElementById("p2");
if(cpassword.value!=""){
    if (password.value == cpassword.value) {
      cpassword.className = "form-control is-valid"
      p2.innerText = "valide"
      p2.style.color = "green"
    } else if ((password.value != cpassword.value) && (cpassword.value != "")) {
      cpassword.className = "form-control is-invalid"
      p2.innerText = "invalide"
      p2.style.color = "red"
    }}
    else
    {
      password.className = "form-control is-invalid"
      p2.innerText = "champs obligatoire*"
      p2.style.color = "red"

    }
  }
  verifpass(e: Event) {
    var password = < HTMLInputElement > document.getElementById("password");
    var p9 = < HTMLParagraphElement > document.getElementById("p9");
if( password.value!="")
{
   if(this.isnumberstring(password.value)==false)
  {password.className = "form-control is-invalid"
  p9.innerText = "invalide(only lettre et chiffre"
  p9.style.color = "red"
} else if(password.value.length<6)
{
  password.className = "form-control is-invalid"
  p9.innerText = "invalide(moins de 6)"
  p9.style.color = "red"
}
else
{
  password.className = "form-control is-valid"
  p9.innerText = "valide"
  p9.style.color = "green"
}
 }
 else if(password.value=="")
 {
  password.className = "form-control is-invalid"
  p9.innerText = "champs obligatoire*"
  p9.style.color = "red"
 }


}
  

    
  
  verifnom(e: Event) {
    var nom = < HTMLInputElement > document.getElementById("nom");
    var p3 = < HTMLParagraphElement > document.getElementById("p3");
    // nom.addEventListener("keypress", (e) => {

    //   if(((e.key >= 'a') && (e.key <= 'z')) || ((e.key >= 'A') && (e.key <= 'Z'))) 
    //   {
    //     if(nom.value.length>=3)
    //     {
    //         nom.className = "form-control is-valid"
    //               p3.innerText = "valide"
    //                p3.style.color = "green"
    //     }
    //   else
    //     if(nom.value.length<4)
    //     {
    //       nom.className = "form-control is-invalid"
    //           p3.innerText = "invalide(longueur<4)"
    //           p3.style.color = "red"
    //     }
    //   }
    //   else
    //     {
    //       nom.className = "form-control is-invalid"
    //           p3.innerText = "invalide(only lettre)"
    //           p3.style.color = "red"
    //     }





    //   })
    //   if (nom.value == "") {
    //     p3.innerText = ""
    //     nom.className = "form-control"
    //   }
    if (nom.value != "") {
      if (this.isString(nom.value) == false) {
        nom.className = "form-control is-invalid"
        p3.innerText = "invalide(lettre uniquement)"
        p3.style.color = "red"
      } else if ((nom.value.length < 4) && (nom.value != "")) {
        nom.className = "form-control is-invalid"
        p3.innerText = "invalide(longueur<4)"
        p3.style.color = "red"
      } else {

        nom.className = "form-control is-valid"
        p3.innerText = "valide"
        p3.style.color = "green"

      }

    } else
    if ((nom.value == ""))

    {
      nom.className = "form-control is-invalid"
      p3.innerText = "champs obligatoire*"
      p3.style.color = "red"
    }
  }
 
  verifprenom(e: Event) {
    var prenom = < HTMLInputElement > document.getElementById("prenom");
    var p4 = < HTMLParagraphElement > document.getElementById("p4");


    if (prenom.value != "") {
      if (this.isString(prenom.value) == false) {
        prenom.className = "form-control is-invalid"
        p4.innerText = "invalide(lettre uniquement)"
        p4.style.color = "red"
      } else if ((prenom.value.length < 4) && (prenom.value != "")) {
        prenom.className = "form-control is-invalid"
        p4.innerText = "invalide(longueur<4)"
        p4.style.color = "red"
      } else {

        prenom.className = "form-control is-valid"
        p4.innerText = "valide"
        p4.style.color = "green"

      }

    } else
    if ((prenom.value == ""))

    {
      prenom.className = "form-control is-invalid"
      p4.innerText = "champs obligatoire*"
      p4.style.color = "red"
    }
  }
  veriftel1(e: Event) {
    var tel1 = < HTMLInputElement > document.getElementById("tel1");
    var p8 = < HTMLParagraphElement > document.getElementById("p8");
    if ((tel1.value != "")) {

      if (this.isnumber(tel1.value) != true) {

        tel1.className = "form-control is-invalid"
        p8.innerText = "invalide(chiffre uniquement)"
        p8.style.color = "red"


      } else if ((tel1.value.length < 8) && (tel1.value != "")) {
        tel1.className = "form-control is-invalid"
        p8.innerText = "invalide(longueur<8)"
        p8.style.color = "red"
      } else if ((tel1.value.length > 8) && (tel1.value != "")) {
        tel1.className = "form-control is-valid"
        p8.innerText = "valide"
        p8.style.color = "green"
      }
    } else if ((tel1.value == ""))

    {
      tel1.className = "form-control is-invalid"
      p8.innerText = "champs obligatoire*"
      p8.style.color = "red"
    }
  }

  veriftel2(e: Event) {
    var tel = < HTMLInputElement > document.getElementById("tel");
    var p5 = < HTMLParagraphElement > document.getElementById("p5");
    if ((tel.value != "")) {

      if (this.isnumber(tel.value) != true) {

        tel.className = "form-control is-invalid"
        p5.innerText = "invalide(chiffre uniquement)"
        p5.style.color = "red"


      } else if ((tel.value.length < 8) && (tel.value != "")) {
        tel.className = "form-control is-invalid"
        p5.innerText = "invalide(longueur<8)"
        p5.style.color = "red"
      } else if ((tel.value.length > 8) && (tel.value != "")) {
        tel.className = "form-control is-valid"
        p5.innerText = "valide"
        p5.style.color = "green"
      }
    } else if ((tel.value == ""))

    {
      tel.className = "form-control is-invalid"
      p5.innerText = "champs obligatoire*"
      p5.style.color = "red"
    }
  }
  verifcode(e: Event) {
    var code = < HTMLInputElement > document.getElementById("codepostale");
    var p7 = < HTMLParagraphElement > document.getElementById("p7");

    if ((code.value != "")) {
      if (this.isnumber(code.value) != true) {
        code.className = "form-control is-invalid"
        p7.innerText = "invalide(chiffre uniquement)"
        p7.style.color = "red"

      } else if ((code.value.length != 4) && (code.value != "")) {
        code.className = "form-control is-invalid"
        p7.innerText = "invalide(longueur!=4)"
        p7.style.color = "red"

      } else if ((code.value.length == 4) && (code.value != "")) {
        code.className = "form-control is-valid"
        p7.innerText = "valide"
        p7.style.color = "green"

      }
    } else
    if ((code.value == ""))

    {
      code.className = "form-control is-invalid"
      p7.innerText = "champs obligatoire*"
      p7.style.color = "red"

    }



  }
  fchange(e: Event) {
    var theme: string
    let element = < HTMLInputElement > document.getElementById("s1");
    var id = < HTMLDivElement > document.getElementById("d1")
    if (element.checked) {
      id.className = "black"

    } else {
      id.className = "white"
    }

  }

  onsubmit(event:Event)
  {
    var nom=<HTMLInputElement>document.getElementById("nom")
    var prenom=<HTMLInputElement>document.getElementById("prenom")
    var email=<HTMLInputElement>document.getElementById("email")
    var password=<HTMLInputElement>document.getElementById("password")
    var adresse=<HTMLInputElement>document.getElementById("adresse")
    var codepostale=<HTMLInputElement>document.getElementById("codepostale")
    var pays=<HTMLInputElement>document.getElementById("pays")
    var tel1=<HTMLInputElement>document.getElementById("tel1")
    var tel=<HTMLInputElement>document.getElementById("tel")
    var date_nes=<HTMLInputElement>document.getElementById("date_nes")

    var ob={"username":nom.value+prenom.value+Math.floor(Math.random()*100),
    "nom":nom.value,
    "prenom":prenom.value,
    "email":email.value,
    "password":password.value,
    "date_naissance":date_nes.value,
    "sexe":"homme",
    "pays":pays.value,
    "adresse":adresse.value,
    "code_postal":codepostale.value,
    "tel_mobile":tel1.value,
    "tel_fixe":tel.value}

    var response:any
    this.registerService.register(ob).subscribe(res => {
      response=res
      if(response.message=="account created")
      {
        alert("account created")
      }
      else
      {
        alert("erreur")
      }
    })

  }


}
