import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
})
export class HeaderComponent {
  sections = ['inicio', 'experiencia', 'skills', 'projetos', 'game'];
  activeSection = 'inicio';

  scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      this.activeSection = id;
    }
  }

  @HostListener('window:scroll')
  onScroll() {
    const scrollY = window.scrollY;
    const thresholds: {[key: string]: number} = {
      inicio: 0,
      experiencia: 600,
      skills: 1200,
      projetos: 1800,
      game: 2400,
    };

    for (const a of this.sections.reverse()) {
      if (scrollY >= thresholds[a]) {
        this.activeSection = a;
        break;
      }
    }
  }
}
