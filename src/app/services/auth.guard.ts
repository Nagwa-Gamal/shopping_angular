import  jwt_decode from 'jwt-decode';
import { AppComponent } from './../app.component';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  userId:string="";
  decoded:any;
  constructor(public app:AppComponent,private router:Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   
   if(this.isLogin())
      return true;
      else
     { this.router.navigate(["/home"]);
     return false;
    }

  }
  isLogin(){
    let token:any = localStorage.getItem("token");
  
     try{
      if(token)
      { this.decoded = jwt_decode(token);
        return true;
      }
      return false;
  
     }
     catch{
      return false;
  
     }
  
  }
  
}
