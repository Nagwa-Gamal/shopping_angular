import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {SignUpService} from './../../services/sign-up.service';
@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  constructor(private signUpService:SignUpService,private router:Router){

  }
  result:any;
  message:any;
  errors:any;
register(form:any)
{
  this.signUpService.register(form.value).subscribe((data:any)=>{
  this.result= data;
  this.errors = data.errors;
  this.message = data.message;
  console.log(data.errors);
  if(this.result.message=='User created successfully!')
  this.router.navigate(["/login"]);

 });

}


}
