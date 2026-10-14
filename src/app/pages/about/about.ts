
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  template: `
    <section class="about">
      <h2>Про нашу платформу</h2>

      <p>
        «Навчальні курси» — це платформа для ознайомлення
        з різними напрямами програмування та інформаційних технологій.
      </p>

      <p>
        Користувачі можуть переглядати доступні курси,
        дізнаватися про викладачів і тривалість навчання.
      </p>

      <p>
        Мета платформи — зробити пошук навчальних матеріалів
        простим і зручним.
      </p>
    </section>
  `,
  styles: [`
    .about {
      background: white;
      padding: 32px;
      border-radius: 12px;
      line-height: 1.8;
      box-shadow: 0 4px 12px #0000000d;
    }

    p {
      font-size: 17px;
    }
  `]
})
export class AboutComponent {}
