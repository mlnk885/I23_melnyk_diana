
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
    <section class="welcome">
      <h2>Ласкаво просимо до навчальних курсів!</h2>
      <p>
        Наша платформа допомагає вивчати сучасні технології,
        розвивати навички програмування та відкривати нові можливості.
      </p>
      <p>
        Обирай курс, знайомся з викладачами та переглядай детальну
        інформацію про навчання.
      </p>
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

    p {
      font-size: 17px;
    }
  `]
})
export class HomeComponent {}
