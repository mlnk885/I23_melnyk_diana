import { Component } from '@angular/core';
import { Header } from './header/header';
import { Main } from './main/main';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, Main, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
