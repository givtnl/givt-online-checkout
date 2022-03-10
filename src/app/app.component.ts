import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'givt-online-checkout';
  taxCertificate = false;
  page = 1;

  incrementPage() {
    this.page++
    if (!this.taxCertificate) {
      this.page++
    }
  }

  decrementPage() {
    this.page--
  }

  toggleTaxCertificate() {
    this.taxCertificate = !this.taxCertificate
  }
}
