import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './component/product/product.component';
import { CartComponent } from './component/cart/cart.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './component/home/home.component';
import { ProfilComponent } from './component/profil/profil.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CartComponent,
    HomeComponent,
    ProfilComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
