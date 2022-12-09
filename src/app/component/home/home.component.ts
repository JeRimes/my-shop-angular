import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'Welcome to my-shop';
  displayTitle(title: string) {
    if (title == "") {
      this.title = 'Welcome to my-shop'
    }
    else {
      this.title = title;
    }
  }

}
