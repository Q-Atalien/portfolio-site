import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
})
export class FooterComponent {
  ano = new Date().getFullYear();
}
