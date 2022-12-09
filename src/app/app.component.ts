import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit() {

  }
  title = 'Welcome to my-shop';
  displayTitle(title: string) {
    console.log(title);
    this.title = this.title == "" ? 'Welcome to my-shop' : title;
  }

}
