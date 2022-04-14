import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfilReadService {

  constructor(private httpClient:HttpClient) { }

  profil(username:any):Observable<any>
  {
    return this.httpClient.get('http://localhost/backend/PHP_REST/API/read_profil.php?username='+username)
  }
}
