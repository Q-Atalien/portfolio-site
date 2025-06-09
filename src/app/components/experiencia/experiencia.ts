import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-experiencia',
  imports: [CommonModule],
  templateUrl: './experiencia.html',
})
export class ExperienciaComponent {
  scrollY = 0;

  experiencias = [
    {
      title: 'Desenvolvedor FullStack',
      empresa: 'SoftSell',
      periodo: '2024 - Atual',
      descricao:
        `- Desenvolvimento de soluções personalizadas em APEX e PL/SQL.
        - Desenvolvimento e manutenção de telas com APEX.
        - Elaboração de análise de requisitos e alinhamento com clientes.
        - Participação em projetos ágeis de desenvolvimento de software como desenvolvedor.
        - Implementação de endpoints e aplicações com uso do Maker 5 e 3.9.`,
    },
    {
      title: 'Desenvolvedor FullStack',
      empresa: 'Roko',
      periodo: '09/2023 - 12/2023',
      descricao:
        `- Desenvolvimento da estrutura lógica de funcionalidades com TypeScript e JavaScript.
         - Desenvolvimento de interfaces completas com HTML, Bootstrap e CSS utilizando Angular.
         - Desenvolvimento de integração entre API e SQL Server.
         - Desenvolvimento de backend com a plataforma .NET.
         - Aplicação de testes e criação de documentações no Swagger.`,
    },
    {
      title: 'Estágio em Desenvolvedor FullStack',
      empresa: 'Linx',
      periodo: '01/2022 - 06/2023',
      descricao:
        `- Desenvolvimento Back-End em C# e API RestFull, controle de versão com Git.
         - Integração com Sefaz e manipulação de arquivos JSON/XML.
         - Desenvolvimento Front-End com Angular.
         - Levantamento de requisitos, documentação e participação em reuniões ágeis (Kanban, SCRUM).`,
    },
  ];

  getOffset(index: number) {
    return Math.sin((this.scrollY + index * 100) * 0.005) * 5;
  }

  @HostListener('window:scroll')
  onScroll() {
    this.scrollY = window.scrollY;
  }
}
