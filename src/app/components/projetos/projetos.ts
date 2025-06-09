import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-projetos',
  imports: [CommonModule],
  templateUrl: './projetos.html',
})
export class ProjetosComponent {
  scrollY = 0;

  projetos = [
    {
      title: 'Projeto CEP',
      descricao: 'Realizar a busca de endereço pelo CEP usando a API pública do ViaCEP.',
      tech: ['Angular', 'Node.js', 'Bootstrap'],
      icon: '📍',
    }
  ];

  getOffset(index: number) {
    return Math.sin((this.scrollY + index * 80) * 0.006) * 6;
  }

  @HostListener('window:scroll')
  onScroll() {
    this.scrollY = window.scrollY;
  }
}
