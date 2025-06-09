import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.html',
})
export class SkillsComponent {
  scrollY = 0;

  skills = [
    {
      icon: '💻',
      title: 'Frontend',
      skills: ['Angular', 'JavaScript', 'TypeScript', 'HTML5/CSS3', 'React'],
    },
    {
      icon: '🛠️',
      title: 'Backend',
      skills: ['Node.js', 'Express', 'MongoDB', '.NET', 'C#'],
    },
    {
    icon: '🌐',
    title: 'Tools',
    skills: ['Git', 'CI/CD', 'Webpack', 'API REST', 'Scrum'],
    }
  ];

  getOffset(index: number) {
    return Math.sin((this.scrollY + index * 150) * 0.008) * 8;
  }

  @HostListener('window:scroll')
  onScroll() {
    this.scrollY = window.scrollY;
  }
}
