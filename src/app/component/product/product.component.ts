import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { products } from '../../model/products'
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products = products;
  @Output()
  public titleProductEvent: EventEmitter<any> = new EventEmitter();

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
    //send to parent the name of product
    this.titleProductEvent.emit(id.toString());

  }
  eventTitleProduct() {
    console.log("send test");
    this.titleProductEvent.emit("test");
  }

  showProductTitle(name: any) {
    console.log(name);
    let myStyle = {
      // 'hovered': "black"
    }
    return myStyle;
  }
}
