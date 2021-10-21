import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(private client:HttpClient) { }

  register(form:any)
  {

    return this.client.post("https://localhost:44360/api/Authentication/register",form);

  }
}
