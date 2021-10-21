import jwt_decode  from 'jwt-decode';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ManageOrdersService {

  token:any;
  decoded:any;
  header:any;
  headers:any;

  constructor(private client:HttpClient) { 
    this.token=localStorage.getItem("token");
    this.decoded = jwt_decode(this.token);

    this.header = new HttpHeaders().set('Authorization',"Bearer "+this.token);
     this.headers = { headers: this.header };
  }
  getAllProducts(){
    return this.client.get("https://localhost:44360/api/Orders",this.headers);

  }
  deleteProduct(data:any){
    return this.client.delete(`https://localhost:44360/api/Orders/${data.id}`,this.headers);

  }
  updateProduct(data:any){
    data.userId=this.decoded.UserId;


    return this.client.put("https://localhost:44360/api/Orders",data,this.headers);

  }
  createProduct(data:any){
    data.userId=this.decoded.UserId;
   console.log(data);
    return this.client.post("https://localhost:44360/api/Orders",data,this.headers);

  }
}
