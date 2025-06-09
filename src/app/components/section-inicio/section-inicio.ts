import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-section-inicio',
  imports: [CommonModule],
  templateUrl: './section-inicio.html',
})
export class SectionInicioComponent {

  scrollY = 0;

  get floatingOffset() {
    return Math.sin(this.scrollY * 0.01) * 10;
  }

  scrollToSection(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }

  @HostListener('window:scroll')
  onScroll() {
    this.scrollY = window.scrollY;
  }
}
