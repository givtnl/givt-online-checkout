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
    if (this.page == 2) {
      this.toggleTaxCertificate()
    }
    this.page--
  }

  toggleTaxCertificate() {
    this.taxCertificate = !this.taxCertificate
  }
}
