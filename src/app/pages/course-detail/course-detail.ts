import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="course-detail" *ngIf="course; else notFound">
      <h2>{{ course.title }}</h2>

      <p>Викладач: {{ course.teacher }}</p>
      <p>Тривалість: {{ course.duration }} годин</p>

      <a routerLink="/courses">Повернутися до курсів</a>
    </section>

    <ng-template #notFound>
      <h2>Курс не знайдено</h2>
      <p>На жаль, курсу з таким ID не існує.</p>
      <a routerLink="/courses">Повернутися до курсів</a>
    </ng-template>
  `,
  styles: [`
    .course-detail {
      background: white;
      padding: 30px;
      border-radius: 12px;
      box-shadow: 0 4px 12px #0000000d;
    }

    a {
      display: inline-block;
      margin-top: 15px;
      color: #2563eb;
    }
  `]
})
export class CourseDetailComponent {
  id = 0;
  course: {
    id: number;
    title: string;
    teacher: string;
    duration: number;
  } | undefined;

  courses = [
    { id: 1, title: 'HTML та CSS', teacher: 'Олександр', duration: 20 },
    { id: 2, title: 'JavaScript', teacher: 'Марія', duration: 30 },
    { id: 3, title: 'Angular', teacher: 'Іван', duration: 25 }
  ];

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.id = Number(params['id']);

      this.course = this.courses.find(
        course => course.id === this.id
      );
    });
  }
}


