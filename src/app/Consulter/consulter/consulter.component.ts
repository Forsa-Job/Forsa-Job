import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/Home/shared.service';

@Component({
  selector: 'app-consulter',
  templateUrl: './consulter.component.html',
  styleUrls: ['./consulter.component.css']
})
export class ConsulterComponent implements OnInit {

  clickEventSubscription:Subscription
  constructor(private sharedService:SharedService) {
    this.clickEventSubscription=this.sharedService.getClickEvent().subscribe(()=>
    {
      this.changeTheme();
    })
   }

  ngOnInit(): void {
    var bt=<HTMLSpanElement> document.getElementById("open")
    bt.style.marginLeft="300px";
  }
  x=1
  
  changeTheme()
  { var theme=<HTMLDivElement> document.getElementById("themes")
    if(this.x%2==0)
    {
    this.x=1;
    theme.style.backgroundColor="white"
    
    }
    else
    {
      this.x=2;
      theme.style.backgroundColor="black"

    }
  }
  add(event:Event)
  {
    this.sharedService.sendClickEventAdd();
  }
  refresh(event:Event)
  {
    this.sharedService.sendClickEventRefresh();
  }
  openNav(event:Event)
  {
    this.sharedService.sendClickEventOpen();
  }

}
