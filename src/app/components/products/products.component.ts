import { AppComponent } from './../../app.component';
import jwt_decode  from 'jwt-decode';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  token:any;
  quantity:any;
  decoded:any;
  constructor(private productsService:ProductsService,public app:AppComponent) { 
    this.token=localStorage.getItem("token");
    this.decoded = jwt_decode(this.token);


  }

  ngOnInit(): void {
   this.getAllProductsWithQuantityInShoppingCart();
  }
result:any;
result1:any;
newProduct:any;
getAllProducts(){
 this.productsService.getAllProducts().subscribe(data=>{
  this.result= data;
  console.log(data);

 });
}

getAllProductsWithQuantityInShoppingCart(){
  this.productsService.getAllProductsWithQuantityInShoppingCart().subscribe((data:any)=>{
   this.result1= data;
   console.log(data.message);
 
  });
 }

 addToCartFirst(product:any){

  this.newProduct=product;
  this.newProduct.complete=false;
  this.newProduct.userId=this.decoded.UserId;
  this.newProduct.productId=product.id;
 delete this.newProduct.id;

  this.productsService.addToCartFirst(this.newProduct).subscribe((data:any)=>{
        console.log(data.message);
      //  console.log(data);

      
      });
    }
addToCart(product:any,quantity:any){

  this.newProduct=product;
  this.newProduct.complete=false;
  this.newProduct.userId=this.decoded.UserId;
  this.newProduct.productId=product.id;

// delete this.newProduct.id;
  // delete this.newProduct.name;
  // delete this.newProduct.imageUrl;
  // delete this.newProduct.quantity;
  





  this.productsService.addToCart(this.newProduct,quantity).subscribe((data:any)=>{
        console.log(data.message);
      //  console.log(data);

      
      });

  //   if(this.token)
//  { this.productsService.addToCart(product).subscribe(data=>{
//     console.log(data);
  
//    });
//   }
//     else 
//    {alert('user is not authenticated');}
}
removeFromCart(product:any,quantity:any){

  console.log(product);
 this.productsService.removeFromCart(product,this.quantity).subscribe(data=>{
       console.log(data);
     
     });
  }

async getQuantity(product:any){
  await this.productsService.getQuantity(product.id).subscribe((data:any)=>{
    this.quantity= data.quantity;
    console.log( data);
   // return Number(data.quantity);
  
   });

}

}
