import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChessBoardComponent } from "./modules/chess-board/chess-board.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ChessBoardComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('chess-game');
}
