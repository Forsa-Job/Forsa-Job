import {
  PosteService
} from './../poste.service';
import {
  Component,
  OnInit
} from '@angular/core';
import {
  Subscription
} from 'rxjs';
import {
  SharedService
} from 'src/app/Home/shared.service';


@Component({
  selector: 'app-postes',
  templateUrl: './postes.component.html',
  styleUrls: ['./postes.component.css']
})
export class PostesComponent implements OnInit {
  postes: any
  TabPostes: any
  clickEventSubscription: Subscription;
  constructor(private sharedservice: SharedService, private posteService: PosteService) {
    this.clickEventSubscription = this.sharedservice.getClickEventAdd().subscribe(() => {
      this.addposte()


    })
    this.clickEventSubscription = this.sharedservice.getClickEventRefresh().subscribe(() => {
      this.getposte();


    })
    this.clickEventSubscription = this.sharedservice.getClickEvent().subscribe(() => {
      this.changeTheme();
    })

    this.clickEventSubscription = this.sharedservice.getClickEventCreate().subscribe(() => {
      this.CreatePost();
    })
  }

  x = 1
  theme = "card bg-primary mb-3"
  changeTheme() {
    var theme = < HTMLDivElement > document.getElementById("card")

    if (this.x % 2 == 0) {
      this.x = 1;
      this.theme = "card bg-primary mb-3"

    } else {
      this.x = 2;
      this.theme = "card text-white bg-dark mb-3"

    }
  }
  ngOnInit(): void {this.getposte()}
  getPoste(event: Event) {
    // this.posteService.getPoste().subscribe(res => {
    //   this.postes=res.articles;
    // })
    // fetch("/assets/postes.json").then((res) => {
    //   var data = res.json().then((data) => {
    //     this.postes = data
    //     console.log(this.postes)
    //   })
    // }).catch(() => {
    //   alert("error")
    // })
    this.posteService.getPoste().subscribe(res => {
      this.postes = res.data;
      console.log(this.postes);})

  }
  getposte() {
    // this.posteService.getPoste().subscribe(res => {
    //   this.postes=res.articles;
    // })

    // fetch("/assets/postes.json").then((res) => {
    //   var data = res.json().then((data) => {
    //     this.postes = data
    //   })
    // }).catch(() => {
    //   alert("error")
    // })

    this.posteService.getPoste().subscribe(res => {
      this.postes = res.data;
      console.log(this.postes);


    })
  }
  addposte() {
    var postes = < HTMLDivElement > document.getElementById("postes");
    postes.insertAdjacentHTML("afterend", `  <div class="${this.theme}" id="card" style="max-width: 540px;">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="" class="img-fluid rounded-start" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body" id="1">
          <h5 class="card-title" id="2" ></h5>
          <p class="card-text" id="3"></p>
          <p class="card-text" id="4"><small class="text-muted"></small></p>
        </div>
      </div>
    </div>
  </div>
`)
    //   postes.innerHTML = postes.innerHTML + `<div class="card mb-3" style="max-width: 540px;">
    //   <div class="row g-0">
    //     <div class="col-md-4">
    //       <img src="..." class="img-fluid rounded-start" alt="...">
    //     </div>
    //     <div class="col-md-8">
    //       <div class="card-body">
    //         <h5 class="card-title">Card title</h5>
    //         <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    //         <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    //       </div>
    //     </div>
    //   </div>
    // </div>`
  }

  CreatePost()
  {
    
  }
}
