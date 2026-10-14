import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CourseService } from '../../services/course';
import { Course } from '../../services/course';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <h2>Наші навчальні курси</h2>

    <div class="course-list">
      <article class="course-card" *ngFor="let course of courses">
        <h3>{{ course.title }}</h3>
        <p><strong>Викладач:</strong> {{ course.teacher }}</p>
        <p>{{ course.description }}</p>

        <a [routerLink]="['/course', course.id]">
          Детальніше
        </a>
      </article>
    </div>

    <p *ngIf="courses.length === 0">
      Поки що курсів немає.
    </p>

    <a class="add-link" routerLink="/courses/add">
      Додати новий курс
    </a>
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

    .course-card h3 {
      color: #2563eb;
    }

    .course-card p {
      line-height: 1.6;
    }

    .course-card a,
    .add-link {
      display: inline-block;
      background: #2563eb;
      color: white;
      padding: 10px 16px;
      border-radius: 6px;
      text-decoration: none;
      margin-top: 10px;
    }

    .course-card a:hover,
    .add-link:hover {
      background: #1d4ed8;
    }
  `]
})
export class CoursesComponent {
  courses: Course[];

  constructor(private courseService: CourseService) {
    this.courses = this.courseService.getItems();
  }
}
