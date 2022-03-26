import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/Home/shared.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  textColor:any
  navbarColor:any
  dropdownColor:any
  dropdownItemColor:any


  constructor(private sharedService:SharedService) { }

  ngOnInit(): void {
  }

  changeT(event:Event)
  {
    this.sharedService.sendClickEvent();
  }
  ischecked(event:Event)
  { 
    if((event.target as HTMLInputElement).checked)
    {
      this.textColor="white";
      this.navbarColor="navbar navbar-expand-lg navbar-dark bg-dark"
      this.dropdownColor="dropdown-menu dropdown-menu-end bg-dark"
      this.dropdownItemColor="btn btn-dark"
    }
    else{
      this.textColor="black";
      this.navbarColor="navbar navbar-expand-lg navbar-light bg-light"
      this.dropdownColor="dropdown-menu dropdown-menu-end bg-light"
      this.dropdownItemColor="btn btn-light"
    }
  }

}
