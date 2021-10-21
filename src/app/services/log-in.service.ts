import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogInService {

  constructor(private client :HttpClient) { }

  login(form:any){
    return this.client.post("https://localhost:44360/api/Authentication/login",form);

  }
}
