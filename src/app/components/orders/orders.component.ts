import { AppComponent } from './../../app.component';
import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/orders.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(private ordersService:OrdersService,public app:AppComponent) { }

  ngOnInit(): void {
   this.getAllOrders();
  }
result:any;
getAllOrders(){
 this.ordersService.getAllOrders().subscribe(data=>{
  this.result= data;
  console.log(data);

 });
}

RemoveFromOrders(order:any){

  this.ordersService.updateAndRemoveFromOrders(order).subscribe(data=>{
     console.log(data);
    
    });
}
}
