import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ManageProductsService {

  token:any;
  decoded:any;
  header:any;
  headers:any;
    constructor(private client:HttpClient) { 
    this.token=localStorage.getItem("token");

    this.header = new HttpHeaders().set('Authorization',"Bearer "+this.token);
    this.headers = { headers: this.header };
  }
  getAllProducts(){
    
   
    return this.client.get("https://localhost:44360/api/Products",this.headers);

  }
  deleteProduct(data:any){ 
    return this.client.delete(`https://localhost:44360/api/Products/${data.id}`,this.headers);

  }
  updateProduct(data:any){
    return this.client.put("https://localhost:44360/api/Products",data,this.headers);

  }
  createProduct(data:any){
    return this.client.post("https://localhost:44360/api/Products",data,this.headers);

  }

}
