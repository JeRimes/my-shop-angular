import { Component, OnInit } from '@angular/core';
import Product, { Cart } from 'src/app/model/types/Product';
import { products } from '../../model/products'
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: Cart[] = [];
  ngOnInit() {
    //get local storage ids product
    var cartLocalStorage = this.getCart();
    if (cartLocalStorage != null) {
      //add to this.products all product added to Cart
      cartLocalStorage.forEach((element: string) => {
        products.map((product) => {
          if (product.id.toString() == element) {
            var cart = { product: product, quantity: 1 }
            this.cart.push(cart)
          }
        })
      });

    }
    console.log(this.cart);
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

  addQuantity(id: number) {
    this.cart.forEach(element => {
      if (element.product.id == id) {
        element.quantity += 1;
      }
    })
  }
  minusQuantity(id: number) {
    this.cart.forEach(element => {
      if (element.product.id == id) {
        if (element.quantity > 1) {
          element.quantity -= 1;
        }
        else {
          this.removeProductFromCart(id)
        }
      }
    })
  }
  removeProductFromCart(id: number) {
    //remove from local storage
    var producStore = localStorage.getItem('productCart');
    console.log(producStore);
    if (producStore != null) {
      var cartParse = JSON.parse(producStore);
      cartParse = cartParse.filter(function (value: number) {
        return value != id;
      })
      console.log(cartParse);
      //set the new list of ids
      localStorage.setItem('productCart', JSON.stringify(cartParse))
    }

    //re-render page without this product
    this.cart = this.cart.filter(function (cart) {
      return cart.product.id != id;
    })
  }

  clearCart() {
    localStorage.clear();
    this.cart.splice(0, this.cart.length);
    console.log(localStorage.getItem('productCart'));
    console.log("clear local storage !");
  }
}
