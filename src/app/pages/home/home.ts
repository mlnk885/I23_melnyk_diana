import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="welcome">
      <h2>Ласкаво просимо до каталогу навчальних курсів!</h2>

      <p>
        Тут ти можеш знайти навчальні курси з програмування,
        ознайомитися з викладачами та дізнатися про зміст навчання.
      </p>

      <p>
        Обирай курс, переглядай детальну інформацію або додавай
        власні навчальні курси до каталогу.
      </p>

      <a routerLink="/courses">Переглянути курси</a>
      <a routerLink="/courses/add">Додати курс</a>
    </section>
  `,
  styles: [`
    .welcome {
      background: white;
      padding: 32px;
      border-radius: 12px;
      line-height: 1.7;
      box-shadow: 0 4px 12px #0000000d;
    }

    .welcome p {
      font-size: 17px;
    }

    .welcome a {
      display: inline-block;
      background: #2563eb;
      color: white;
      padding: 12px 18px;
      margin: 10px 10px 0 0;
      border-radius: 6px;
      text-decoration: none;
    }

    .welcome a:hover {
      background: #1d4ed8;
    }
  `]
})
export class HomeComponent {}
