import {Component, OnInit} from '@angular/core';
import { SharedService } from '../shared.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  clickEventSubscription: Subscription;
  widhth=window.innerWidth;
  onresize(event:Event)
  {
    this.widhth=window.innerWidth;
  }
  
  constructor(private sharedservice:SharedService) {
    this.action();
    this.clickEventSubscription=this.sharedservice.getClickEvent().subscribe(()=>
    {
      this.change();
    })
  }

  ngOnInit(): void {}
  text="backgroundimg";
  x=1
  change()
  {
    if(this.x%2==0)
    {this.text="backgroundimg";
    this.x=1;}
    else
    {this.x=2;
    this.text="backgroundDark";}
  }

  list = [" Welcome to Forsa JOB", " here u can find what u search for "]
  k = " "
  vitesse = 200
  write(msg: String) {
    this.k = "->"
    var i = 0
    setInterval(() => {

      this.k = this.k + msg.charAt(i)
      i++;

    }, this.vitesse)

  }
  delete() {
    var i = this.k.length;
    setInterval(() => {
      if (i >= 3) {
        this.k = this.k.slice(0, -1)
        i--;
      }


    }, this.vitesse)
  }

  n = this.list.length;
  j = 0;
  action() {
    if (this.j < this.n) {
      this.write(this.list[this.j]);
      setTimeout(() => {
        this.delete()
      }, this.vitesse * this.list[this.j].length);
      this.j++;

      setTimeout(() => {
        this.action()

      }, (this.vitesse * this.list[this.j - 1].length) * 2 + 100);

    } else {
      this.j = 0
      this.action()
    }


  }

}
