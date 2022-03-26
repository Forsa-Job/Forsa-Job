import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PosteService {

  constructor(private httpClient:HttpClient) { }
  getPoste():Observable<any>
  {
    return this.httpClient.get('https://newsapi.org/v2/everything?q=apple&from=2022-03-23&to=2022-03-23&sortBy=popularity&apiKey=acb77a5591cf444088625dbb314d0014')
  }
}
