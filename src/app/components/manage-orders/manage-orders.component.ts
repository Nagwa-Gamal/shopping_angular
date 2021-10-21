import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { ManageOrdersService } from 'src/app/services/manage-orders.service';

@Component({
  selector: 'manage-orders',
  templateUrl: './manage-orders.component.html',
  styleUrls: ['./manage-orders.component.css']
})
export class ManageOrdersComponent  {

  source: LocalDataSource = new LocalDataSource;
  data = [];
  settings = {
    delete: {
      confirmDelete: true
    },
    add: {
      confirmCreate: true
    },
    
    edit: {
      confirmSave: true,
    },
    columns: {
      id: {
        title: 'ID'
      },
     
      productId: {
        title:'ProductId'
      },
      quantity: {
        title:'Quantity'
      }
    }
  };
  constructor(private manageOrdersService:ManageOrdersService){
this.getAllProducts();
  }
 
  result:any;
 getAllProducts(){
  this.manageOrdersService.getAllProducts().subscribe((data:any)=>{
    this.result=data;
    this.source = new LocalDataSource(data);
    this.data = data;
  })
 }

 onDeleteConfirm(event:any) {

  if (window.confirm('do you want to delete this item')) {
    
    let data=
    { 
     id:event.data.id
    }

    this.manageOrdersService.deleteProduct(data).subscribe((data:any)=>{
    });
    event.confirm.resolve();
  }
   else {
    event.confirm.reject();
  }

}

onSaveConfirm(event:any) {
  if (window.confirm('do you want to update ')) {
    let data=
    {
      id:event.newData.id,
      productId:event.newData.productId,
      quantity:event.newData.quantity
    }
    this.manageOrdersService.updateProduct(data).subscribe((data:any)=>{
    event.confirm.resolve(event.newData);

 }); 

  } else {
    event.confirm.reject();
  }
}


onCreateConfirm(event:any) {
  if (window.confirm('do you want to save')) {
    
    let data={
      productId:event.newData.productId,
      quantity:event.newData.quantity

    };
   
      
     
        //let its=this;
        this.manageOrdersService.createProduct(data).subscribe((data)=>{
            console.log(data);

        });
      }
      else {
        event.confirm.reject();
      }

}

}
