import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { Subscription } from 'rxjs';
import { CheckCompteService } from './service/check-compte.service';
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-connect-a',
  templateUrl: './connect-a.component.html',
  styleUrls: ['./connect-a.component.css']
})
export class ConnectAComponent implements OnInit {

  clickEventSubscription: Subscription;
  StyleColor="color: #FF9966; background-color:#fff;";
  constructor(private sharedservice:SharedService,private checkCompte:CheckCompteService) 
  { 
    
    this.listn()
    this.clickEventSubscription=this.sharedservice.getClickEvent().subscribe(()=>
    {
      this.change();
    })
    
  }
  x=1
  selectedvalue:any
  value(event:Event)
  {
    this.selectedvalue=(event.target as HTMLInputElement).value
    
    
  }
  change()
  {
    if(this.x%2==0)
    {this.StyleColor="color: #FF9966; background-color:#fff;";
    this.x=1;}
    else
    {this.x=2;
    this.StyleColor="color: #FF9966; background-color:#000;";}
  }
  ngOnInit(): void {
  }
  val1:any
  val2:any
  list:any;

 
  listn()
  {
    fetch("/assets/number.json").then((data) =>
    {
      
      var listd=data.json().then((listt) =>
      {
       
       this.list=listt;
       console.log(this.list);
       
        
      })
    
    })
  }

  num:any;
  onupdate(event:Event)
  {
    this.num=(event.target as HTMLInputElement).value;
  }
  ver:any
  verif(event:Event)
  { 
    console.log(this.selectedvalue);
    
    var url="http://apilayer.net/api/validate?access_key=2e32c64ba1bb94e6900c11872f3bbc50&number="+this.num+"&country_code="+this.selectedvalue +"&format=1"
    fetch(url).then((data) => {

      var js=data.json().then((info) => {

        this.ver=info.valid;
        
        

      })
      

    })
  }
  check=""
  compte(event:Event)
  {

    var email=<HTMLInputElement>document.getElementById("exampleInputEmail1")
    var password=<HTMLInputElement>document.getElementById("exampleInputPassword1")

    this.checkCompte.check(email.value,password.value).subscribe(res => {
      
      this.check=res.message
      console.log(this.check);

      if(res.message=='Found')
      {
        open('http://localhost:4200/Consulter')
        localStorage.setItem('username',res.username)
        close()
       
      }
      

    })
    


    
  }

}
