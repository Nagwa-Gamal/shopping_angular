import jwt_decode from 'jwt-decode';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  decoded: any;

  constructor(private router: Router) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.isAdmin())
      return true;
    else {
      //this.router.navigate(["/login"]);
      return false;
    }
  }


  isAdmin() {
    let token: any = localStorage.getItem("token");

    try {
      if (token) {
        this.decoded = jwt_decode(token);
        let Admin = this.decoded.isAdmin;
        if (Admin == "Admin")
          return true;
        else
          return false;
      }
      return false;

    }
    catch {
      return false;

    }

  }
}
