import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { About } from "./about/about";
import { Home } from "./home/home";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink, About, Home],
  templateUrl: './app.html',
  styleUrls: ['./app.css'] 
})
export class App {
  protected readonly title = signal('Assigment-1');
}
