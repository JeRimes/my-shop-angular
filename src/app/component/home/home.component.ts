import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'Welcome to my-shop';
  displayTitle(title: string) {
    console.log(title);
    this.title = this.title == "" ? 'Welcome to my-shop' : title;
  }

}
