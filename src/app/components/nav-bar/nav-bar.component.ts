import { AppComponent } from './../../app.component';
import  jwt_decode  from 'jwt-decode';
import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent  {

  token:any;
  decoded:any;
  userId:string="";
  isAdmin:string="";
  constructor(private router: Router,public app:AppComponent) { 
    this.token=localStorage.getItem("token");
  
    if(this.token)
  { this.decoded = jwt_decode(this.token);
  this.userId=this.decoded.UserId;
  this.isAdmin=this.decoded.isAdmin;
  this.app.Login=true;
  console.log(this.decoded);
  }
  else
  {
    this.app.Login=false;

  }

  }


  logout() {
    localStorage.removeItem("token");
    this.token=null;
    this.userId="";
   this.app.Login=false;

    this.router.navigate(["/home"]);

  }

}
