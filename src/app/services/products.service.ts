import jwt_decode from "jwt-decode";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  token:any;
  decoded:any;
  header:any;
  headers:any;
  constructor(private client:HttpClient ) {
    this.token=localStorage.getItem("token");
    this.decoded = jwt_decode(this.token);

    this.header = new HttpHeaders().set('Authorization',"Bearer "+this.token);
     this.headers = { headers: this.header };
   }
  getAllProducts(){
   
    return this.client.get("https://localhost:44360/api/Products",this.headers);

  }
  getAllProductsWithQuantityInShoppingCart()
  {
    return this.client.get(`https://localhost:44360/api/Products/getWithQuantityInShoppingCart/${this.decoded.UserId}`,this.headers);

  }
  addToCartFirst(product:any){
    product.quantity=1;
    return this.client.post("https://localhost:44360/api/ShoppingCart",product,this.headers);
  }
  addToCart(product:any,quantity:any){
 
 console.log(product);

    if(quantity==0)
   { product.quantity=1;
    return this.client.post("https://localhost:44360/api/ShoppingCart",product,this.headers);

   }
   else {
    product.quantity =quantity+1;
    return this.client.put("https://localhost:44360/api/ShoppingCart/update",product,this.headers);

   }

  }
  removeFromCart(product:any,quantity:any){
    
    

    product.complete=false;
    product.productId=product.id;
     product.userId=this.decoded.UserId;
 
   
     console.log(product);
     console.log(quantity);
    if(quantity==1)
   { product.quantity=0;
    return this.client.delete(`https://localhost:44360/api/ShoppingCart/delete/${product}`,this.headers);

   }
   else {
    product.quantity-=1;
    return this.client.put("https://localhost:44360/api/ShoppingCart/update",product,this.headers);

   }

}
  getQuantity(id:number){
    return this.client.get(`https://localhost:44360/api/ShoppingCart/getQuantity/${id}/${this.decoded.UserId}`,this.headers);

  }

}
