import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './component/cart/cart.component';
import { HomeComponent } from './component/home/home.component';
import { ProductComponent } from './component/product/product.component';
import { ProfilComponent } from './component/profil/profil.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'Home', },
  { path: 'Home', component: HomeComponent },
  { path: 'Cart', component: CartComponent },
  { path: 'Profil', component: ProfilComponent },
  {
    path: '**',
    redirectTo: 'Home',
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
