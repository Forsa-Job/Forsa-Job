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
  theme = "card bg-Light mb-3"
  changeTheme() {
    var theme = < HTMLDivElement > document.getElementById("card")

    if (this.x % 2 == 0) {
      this.x = 1;
      this.theme = "card bg-Light mb-3"

    } else {
      this.x = 2;
      this.theme = "card text-white bg-dark mb-3"

    }
  }
  
  ngOnInit(): void {this.getposte()
  
  }
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
  favoris(event:Event)
  {
    
   console.log("work");
   

    
    (event.target as HTMLAnchorElement).innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
  </svg>`
  }
}
