import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsDetailsComponent } from './products/components/products-details/products-details.component';
import { CartComponent } from './carts/components/cart/cart.component';
import { AllProductsComponent } from './products/components/all-products/all-products.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "products", component: AllProductsComponent },
  {path:"details/:id",component:ProductsDetailsComponent},
  { path: "cart", component: CartComponent },
  {path:"**", redirectTo :"home" , pathMatch : "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
