import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-mini-game',
  imports: [CommonModule],
  templateUrl: './mini-game.html',
})
export class MiniGameComponent {
  gameScore = 0;
  gameAtivo = false;
  posicao = { x: 50, y: 50 };
  gameTime: any;

  startGame() {
    this.gameScore = 0;
    this.gameAtivo = true;
    this.moveTarget();

    this.gameTime = setTimeout(() => {
      this.gameAtivo = false;
    }, 15000);
  }

  moveTarget() {
    this.posicao = {
      x: Math.random() * 80 + 10,
      y: Math.random() * 60 + 20,
    };
  }

  hitTarget() {
    this.gameScore++;
    if (this.gameScore >= 10) {
      this.gameAtivo = false;
      clearTimeout(this.gameTime);
    } else {
      this.moveTarget();
    }
  }
}
