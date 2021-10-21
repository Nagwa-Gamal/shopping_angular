import { ManageProductsService } from './../../services/manage-products.service';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent  {

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
      name: {
        title: ' Name'
      },
     price: {
        title: 'Price'
      },
      imageUrl: {
        title: 'ImageUrl'
      }
    }
  };
  constructor(private manageProductsService:ManageProductsService){
this.getAllProducts();
  }
 
  result:any;
 getAllProducts(){
  this.manageProductsService.getAllProducts().subscribe((data:any)=>{
    this.result=data;
    this.source = new LocalDataSource(data);
    this.data = data;
  })
 }

 onDeleteConfirm(event:any) {

  if (window.confirm('do you want to delete this item')) {
    
    let data=
    { 
     id:event.newData.id
    }

    this.manageProductsService.deleteProduct(data).subscribe((data:any)=>{
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
      name:event.newData.name,
      price:event.newData.price,
      imageUrl:event.newData.imageUrl
    }
    this.manageProductsService.updateProduct(data).subscribe((data:any)=>{
    event.confirm.resolve(event.newData);
    console.log(data.message);

 }); 

  } else {
    event.confirm.reject();
  }
}


onCreateConfirm(event:any) {
  if (window.confirm('do you want to save')) {
    
    let data={
      name:event.newData.name,
      price:event.newData.price,
      imageUrl:event.newData.imageUrl
    };
   
      
     
        //let its=this;
        this.manageProductsService.createProduct(data).subscribe((data)=>{
            console.log(data);

        });
      }
      else {
        event.confirm.reject();
      }

}

}

