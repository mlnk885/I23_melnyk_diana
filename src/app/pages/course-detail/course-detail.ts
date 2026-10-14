import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CourseService, Course } from '../../services/course';

@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="course-detail" *ngIf="course; else notFound">
      <h2>{{ course.title }}</h2>

      <p><strong>ID курсу:</strong> {{ course.id }}</p>
      <p><strong>Викладач:</strong> {{ course.teacher }}</p>
      <p><strong>Опис:</strong> {{ course.description }}</p>

      <a routerLink="/courses">Повернутися до курсів</a>
    </section>

    <ng-template #notFound>
      <section class="not-found">
        <h2>Курс не знайдено</h2>
        <p>На жаль, курсу з таким ID не існує.</p>
        <a routerLink="/courses">Повернутися до курсів</a>
      </section>
    </ng-template>
  `,
  styles: [`
    .course-detail,
    .not-found {
      background: white;
      padding: 30px;
      border-radius: 12px;
      box-shadow: 0 4px 12px #0000000d;
    }

    .course-detail p,
    .not-found p {
      line-height: 1.7;
    }

    a {
      display: inline-block;
      margin-top: 15px;
      color: #2563eb;
    }
  `]
})
export class CourseDetailComponent {
  course: Course | undefined;

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService
  ) {
    this.route.params.subscribe(params => {
      const id = Number(params['id']);
      this.course = this.courseService.getItemById(id);
    });
  }
}
