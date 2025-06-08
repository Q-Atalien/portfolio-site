import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header';
import { SectionInicio } from './components/section-inicio/section-inicio';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, SectionInicio],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'portfolio-site';
}
