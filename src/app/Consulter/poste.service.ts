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
    return this.httpClient.get('http://localhost/backend/PHP_REST/Api/Employee/Post/read.php')
  }
}
