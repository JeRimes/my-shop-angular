import { Component, OnInit } from '@angular/core';
import { products } from '../../model/products'
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products = products;

  ngOnInit() {
  }

  addToCart(id: number) {
    var productCart = [];
    var producStore = localStorage.getItem('productCart');
    if (producStore != null) {
      var cartParse = JSON.parse(producStore);
      //avoid duplicate for local storage
      cartParse.forEach((element: string) => {
        if (element != id.toString()) {
          productCart.push(JSON.parse(element))
        }
      });
    }
    productCart.push(id)
    localStorage.setItem('productCart', JSON.stringify(productCart))
    console.log(localStorage.getItem('productCart'));
  }

  clearCart() {
    localStorage.clear();
    console.log(localStorage.getItem('productCart'));
    console.log("clear local storage !");
  }
}
