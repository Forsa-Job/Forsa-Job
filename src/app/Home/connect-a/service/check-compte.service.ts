import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckCompteService {

  constructor(private httpClient:HttpClient) { }

  check(email:any,password:any):Observable<any>
  {
    return this.httpClient.get('http://localhost/backend/PHP_REST/API/read_single_compte.php?email='+email+'&password='+password)
  }


}
