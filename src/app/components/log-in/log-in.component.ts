import { NavBarComponent } from './../nav-bar/nav-bar.component';
import { AppComponent } from './../../app.component';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//import { LogInService } from 'src/app/services/log-in.service';
import { LogInService } from './../../services/log-in.service';
import jwt_decode from "jwt-decode";

@Component({
  selector: 'log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {

  constructor(private loginService: LogInService, private router: Router,public app:AppComponent,private route:ActivatedRoute,public nav:NavBarComponent) {

  }
  result: any;
  userId:string="";
  errors:any;
  message:any;

  login(form: any) {

    if(this.app.Login)
   {this.router.navigate(["/home"]);
  }
else
  { 
   this.loginService.login(form.value).subscribe((data: any) => {
      this.result = data;
      this.errors = data.errors;
      this.message = data.message;

      console.log(data.token);
      console.log(data.message);
      if (data.token) {
        localStorage.setItem("token", data.token);
        this.isLogin();
        this.app.Login=true;
        let returnUrl=this.route.snapshot.queryParamMap.get('returnUrl')||'/';
        localStorage.setItem("returnUrl", returnUrl);

        this.router.navigate(["/home"]);
      }
      else {
        this.app.Login=false;
      }

    });
  }
  }
  isLogin(){
      let token:any = localStorage.getItem("token");
      if(token)
     { let decoded:any = jwt_decode(token);
      this.userId=decoded.UserId;
      console.log(decoded);
     }

  }

}
