import { Component, OnInit } from '@angular/core';
import { ReadService } from './services/read.service';

@Component({
  selector: 'app-mes-postes',
  templateUrl: './mes-postes.component.html',
  styleUrls: ['./mes-postes.component.css']
})
export class MesPostesComponent implements OnInit {

  constructor(private readService:ReadService) { }
  postes:any
  ngOnInit(): void {

    this.readService.read(localStorage.getItem('username')).subscribe(res => {
      this.postes=res.data
      console.log(res);
      
    })
  }

}
