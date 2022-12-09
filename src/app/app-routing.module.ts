import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './component/cart/cart.component';
import { HomeComponent } from './component/home/home.component';
import { ProductComponent } from './component/product/product.component';

const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'Product', component: ProductComponent },
  { path: 'Cart', component: CartComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
