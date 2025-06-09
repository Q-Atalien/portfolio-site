import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header';
import { SectionInicioComponent } from './components/section-inicio/section-inicio';
import { ExperienciaComponent } from './components/experiencia/experiencia';
import { SkillsComponent } from './components/skills/skills';
import { ProjetosComponent } from './components/projetos/projetos';
import { MiniGameComponent } from './components/mini-game/mini-game';
import { FooterComponent } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, SectionInicioComponent, ExperienciaComponent, SkillsComponent, ProjetosComponent, MiniGameComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

}
