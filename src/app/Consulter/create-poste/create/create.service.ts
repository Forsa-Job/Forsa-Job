import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateService {

  constructor(private httpClient:HttpClient) { }
  createPoste(objet:any):Observable<any>
  {
    return this.httpClient.post('http://localhost/backend/PHP_REST/Api/Employee/Post/create.php',objet,{responseType: 'json'})
  }
}
