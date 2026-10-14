
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <h2>Наші навчальні курси</h2>

    <div class="course-list">
      <article class="course-card" *ngFor="let course of courses">
        <h3>{{ course.title }}</h3>
        <p>Викладач: {{ course.teacher }}</p>
        <p>Тривалість: {{ course.duration }} годин</p>

        <a [routerLink]="['/course', course.id]">
          Переглянути курс
        </a>
      </article>
    </div>
  `,
  styles: [`
    .course-list {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 20px;
    }

    .course-card {
      background: white;
      padding: 24px;
      border-radius: 12px;
      box-shadow: 0 4px 12px #0000000d;
    }

    .course-card a {
      display: inline-block;
      background: #2563eb;
      color: white;
      padding: 10px 16px;
      border-radius: 6px;
      text-decoration: none;
    }

    .course-card a:hover {
      background: #1d4ed8;
    }
  `]
})
export class CoursesComponent {
  courses = [
    {
      id: 1,
      title: 'HTML та CSS',
      teacher: 'Олександр',
      duration: 20
    },
    {
      id: 2,
      title: 'JavaScript',
      teacher: 'Марія',
      duration: 30
    },
    {
      id: 3,
      title: 'Angular',
      teacher: 'Іван',
      duration: 25
    }
  ];
}
