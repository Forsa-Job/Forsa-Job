import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/Home/shared.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  clickEventSubscription: Subscription;
  
  constructor(private sharedservice:SharedService) { 
    this.clickEventSubscription=this.sharedservice.getClickEventOpen().subscribe(()=>
    {
      this.openNav();
    })
    this.clickEventSubscription=this.sharedservice.getClickEvent().subscribe(()=>
    {
      this.changeTheme();
    })
  }
  theme="sidenavWhite"
  atheme="athemeWhite"
  x=1
  changeTheme()
  {
    if(this.x%2==0)
    {this.theme="sidenav sidenavWhite";
    this.atheme="athemeWhite";
    this.x=1;}
    else
    {this.x=2;
    this.theme="sidenav sidenavBlack";
    this.atheme="athemeBlack";}
  
  }
   openNav() {
    var bt=<HTMLSpanElement> document.getElementById("open")
    var a=<HTMLInputElement> document.getElementById("mySidenav")
    if(a.style.width == "0px")
    { var a=<HTMLInputElement> document.getElementById("mySidenav")
         a.style.width = "400px";
    var aa=<HTMLDivElement> document.getElementById("main")
    aa.style.marginLeft = "400px";
    
    bt.style.color="red";
    bt.style.marginLeft="300px"
    bt.innerHTML=`
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
  </svg>`
   }
   else
   {
  /* Set the width of the side navigation to 0 */
  
      var b=<HTMLInputElement> document.getElementById("mySidenav")
      b.style.width = "0";
      var bb=<HTMLDivElement> document.getElementById("main")
      bb.style.marginLeft = "0";
      var bt=<HTMLSpanElement> document.getElementById("open")
      bt.style.color="green";
      bt.style.marginLeft="0px"
    bt.innerHTML=`
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
  </svg>`
  }
  }
  ngOnInit(): void {
  }

}
