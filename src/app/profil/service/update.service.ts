import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  constructor(private httpClient:HttpClient) { }

  update(ob:any)
  {
    return this.httpClient.put('http://localhost/backend/PHP_REST/API/update_compte.php',ob)
  }
}
