import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private  httpClient:HttpClient) { }

  register(ob:any)
  {
    return this.httpClient.post('http://localhost/backend/PHP_REST/API/create_compte.php',ob)
  }
}
