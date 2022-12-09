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

  totalPrice = 0;

  addToTotal(number: number) {
    this.totalPrice += number;
  }
  minusToTotal(number: number) {
    this.totalPrice -= number;
  }
  getTotal() {
    return this.totalPrice;
  }
  setTotal(number: number) {
    this.totalPrice = number;
  }

  ngOnInit() {
    //get local storage ids product
    var cartLocalStorage = this.getCart();
    if (cartLocalStorage != null) {
      //add to this.products all product added to Cart
      cartLocalStorage.forEach((element: string) => {
        products.map((product) => {
          if (product.id.toString() == element) {
            //set by default the quantity to 1
            var cart = { product: product, quantity: 1 }
            this.cart.push(cart)
            //add to total price
            this.addToTotal(product.specifications.price);
          }
        })
      });
    }
  }
  //get from local storage : cart
  getCart() {
    var productCart: any[] = [];
    var producStore = localStorage.getItem('productCart');
    if (producStore != null) {
      var cartParse = JSON.parse(producStore);
      cartParse.forEach((element: string) => {
        productCart.push(JSON.parse(element))

      });
    }
    return productCart;
  }

  addQuantity(id: number) {
    this.cart.forEach(element => {
      if (element.product.id == id) {
        element.quantity += 1;
        this.addToTotal(element.product.specifications.price);
      }
    })
  }
  minusQuantity(id: number) {
    var cartList = this.cart;
    cartList.forEach(element => {
      console.log(cartList.length);
      if (element.product.id == id) {
        console.log("minus" + element.product.specifications.price);

        if (element.quantity > 1) {
          element.quantity -= 1;
        }
        else {
          this.removeProductFromCart(id)
        }
        this.minusToTotal(element.product.specifications.price)
      }
    })
  }
  removeProductFromCart(id: number) {
    //remove from local storage
    var producStore = localStorage.getItem('productCart');
    if (producStore != null) {
      var cartParse = JSON.parse(producStore);
      cartParse = cartParse.filter(function (value: number) {
        return value != id;
      })
      //set the new list of ids
      localStorage.setItem('productCart', JSON.stringify(cartParse))
    }

    //re-render page without this product
    this.cart = this.cart.filter(function (cart) {
      return cart.product.id != id;
    })


  }

  clearCart() {
    //clear local storage
    localStorage.clear();

    //clear cart
    this.cart.splice(0, this.cart.length);

    //set total to 0
    this.setTotal(0);
  }
}
