import { Component, OnInit } from '@angular/core';
import Product from 'src/app/model/types/Product';
import { products } from '../../model/products'
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products: Product[] = [];
  ngOnInit() {
    //get local storage ids product
    var cartLocalStorage = this.getCart();
    if (cartLocalStorage != null) {
      //add to this.products all product added to Cart
      cartLocalStorage.forEach((element: string) => {
        products.map((product) => {
          if (product.id.toString() == element) {
            this.products.push(product)
          }
        })
      });
    }
    console.log(this.products);

  }

  getCart() {
    var productCart: any[] = [];
    var producStore = localStorage.getItem('productCart');
    if (producStore != null) {
      var cartParse = JSON.parse(producStore);
      //avoid duplicate for local storage
      cartParse.forEach((element: string) => {
        productCart.push(JSON.parse(element))

      });
    }
    console.log(productCart);
    return productCart;
  }
  clearCart() {
    localStorage.clear();
    console.log(localStorage.getItem('productCart'));
    console.log("clear local storage !");
  }
}
