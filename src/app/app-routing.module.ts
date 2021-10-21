import { ManageProductsComponent } from './components/manage-products/manage-products.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './components/log-in/log-in.component';
import { ProductsComponent } from './components/products/products.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ManageOrdersComponent } from './components/manage-orders/manage-orders.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AuthGuard } from './services/auth.guard';
import { AdminGuard } from './services/admin.guard';

const routes: Routes = [
  {path:'login',component:LogInComponent},
{path:'register',component:SignUpComponent}
,{path:'products',component:ProductsComponent,canActivate:[AuthGuard]}
,{path:'manageProducts',component:ManageProductsComponent,canActivate:[AuthGuard,AdminGuard]}
,{path:'manageOrders',component:ManageOrdersComponent,canActivate:[AuthGuard,AdminGuard]}
,{path:'myOrders',component:OrdersComponent,canActivate:[AuthGuard]}
,{path:'shoppingCart',component:ShoppingCartComponent,canActivate:[AuthGuard]}
,{path:'home',component:HomeComponent}
,{path:'nav',component:NavBarComponent}
,{ path: '', redirectTo: 'home', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
