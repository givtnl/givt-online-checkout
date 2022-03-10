import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'givt-online-checkout';
  page = 1;

  incrementPage() {
    this.page++
  }

  decrementPage() {
    this.page--
  }
}
