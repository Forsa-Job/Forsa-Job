import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReadService {

  constructor(private httpClient:HttpClient) { }

  read():Observable<any>
  {
    return this.httpClient.get('http://localhost/backend/PHP_REST/API/read_poste.php')
  }
}
