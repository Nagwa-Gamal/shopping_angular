import  jwt_decode  from 'jwt-decode';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

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

   getAllOrders(){
   
    return this.client.get("https://localhost:44360/api/Orders",this.headers);

  }
  
  updateAndRemoveFromOrders(order:any){
    console.log(order);
    return this.client.put(`https://localhost:44360/api/Orders/updateAndRemoveFromOrders`,order,this.headers);


  }
}
