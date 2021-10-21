import { AppComponent } from './../../app.component';
import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  

  token:any;
  constructor(private shoppingCartService:ShoppingCartService,public app:AppComponent) {
    this.token=localStorage.getItem("token");

   }

  ngOnInit(): void {
   this.getAll();
  }
result:any;
getAll(){
  this.shoppingCartService.getAll().subscribe(data=>{
    this.result= data;
     console.log(data);
    
    });

  
    //   console.log(this.token);
//   if(!this.token)
//   alert('user is not authenticated');
//   if(this.token)
// { this.shoppingCartService.getAll().subscribe(data=>{
//   this.result= data;
//   console.log(data);

//  });
// }
// else 
// {
//   alert('user is not authenticated');}
// }
   }
   updateAndAddToOrders(product:any){
    product.complete=true;
    console.log(product);
     
    this.shoppingCartService.updateAndAddToOrders(product).subscribe(data=>{
       console.log(data);
      
      });

  }
  updateAndRemoveFromOrders(product:any){
    product.complete=false;
    this.shoppingCartService.updateAndRemoveFromOrders(product).subscribe(data=>{
       console.log(data);
      
      });
  }

}
