import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CourseService } from '../../services/course';

@Component({
  selector: 'app-add-course',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section class="form-container">
      <h2>Додати курс</h2>

      <form #itemForm="ngForm" (ngSubmit)="addItem(itemForm)">
        <div class="form-group">
          <label for="title">Назва курсу</label>

          <input
            type="text"
            id="title"
            name="title"
            [(ngModel)]="newItem.title"
            required
            minlength="3"
            maxlength="50"
            #titleRef="ngModel"
          />

          <div class="error" *ngIf="submitted && titleRef.invalid">
            <small *ngIf="titleRef.errors?.['required']">
              Назва курсу обов'язкова
            </small>
            <small *ngIf="titleRef.errors?.['minlength']">
              Назва повинна містити мінімум 3 символи
            </small>
            <small *ngIf="titleRef.errors?.['maxlength']">
              Назва повинна містити максимум 50 символів
            </small>
          </div>
        </div>

        <div class="form-group">
          <label for="teacher">Викладач</label>

          <input
            type="text"
            id="teacher"
            name="teacher"
            [(ngModel)]="newItem.teacher"
            required
            minlength="3"
            maxlength="50"
            #teacherRef="ngModel"
          />

          <div class="error" *ngIf="submitted && teacherRef.invalid">
            <small *ngIf="teacherRef.errors?.['required']">
              Вкажіть викладача
            </small>
            <small *ngIf="teacherRef.errors?.['minlength']">
              Ім'я викладача повинно містити мінімум 3 символи
            </small>
            <small *ngIf="teacherRef.errors?.['maxlength']">
              Ім'я викладача повинно містити максимум 50 символів
            </small>
          </div>
        </div>

        <div class="form-group">
          <label for="description">Опис курсу</label>

          <textarea
            id="description"
            name="description"
            [(ngModel)]="newItem.description"
            required
            minlength="10"
            maxlength="200"
            rows="5"
            #descriptionRef="ngModel"
          ></textarea>

          <div class="error" *ngIf="submitted && descriptionRef.invalid">
            <small *ngIf="descriptionRef.errors?.['required']">
              Опис курсу обов'язковий
            </small>
            <small *ngIf="descriptionRef.errors?.['minlength']">
              Опис повинен містити мінімум 10 символів
            </small>
            <small *ngIf="descriptionRef.errors?.['maxlength']">
              Опис повинен містити максимум 200 символів
            </small>
          </div>
        </div>

        <button type="submit">Додати курс</button>
      </form>
    </section>
  `,
  styles: [`
    .form-container {
      background: white;
      padding: 30px;
      border-radius: 12px;
      box-shadow: 0 4px 12px #0000000d;
    }

    .form-container h2 {
      margin-top: 0;
      margin-bottom: 25px;
    }

    .form-group {
      display: flex;
      flex-direction: column;
      margin-bottom: 20px;
    }

    .form-group label {
      margin-bottom: 8px;
      font-weight: bold;
    }

    .form-group input,
    .form-group textarea {
      width: 100%;
      padding: 12px;
      border: 1px solid #cbd5e1;
      border-radius: 6px;
      font-size: 16px;
      font-family: inherit;
    }

    .form-group input:focus,
    .form-group textarea:focus {
      outline: none;
      border-color: #2563eb;
    }

    .form-group textarea {
      resize: vertical;
    }

    .error {
      display: flex;
      flex-direction: column;
      gap: 4px;
      margin-top: 7px;
      color: #dc2626;
    }

    .error small {
      font-size: 14px;
    }

    button {
      background: #2563eb;
      color: white;
      border: none;
      border-radius: 6px;
      padding: 12px 22px;
      font-size: 16px;
      cursor: pointer;
    }

    button:hover {
      background: #1d4ed8;
    }
  `]
})
export class AddCourseComponent {
  submitted = false;

  newItem = {
    title: '',
    teacher: '',
    description: ''
  };

  constructor(
    private courseService: CourseService,
    private router: Router
  ) {}

  addItem(form: NgForm): void {
    this.submitted = true;

    if (form.invalid) {
      return;
    }

    this.courseService.addItem({
      title: this.newItem.title.trim(),
      teacher: this.newItem.teacher.trim(),
      description: this.newItem.description.trim()
    });

    form.resetForm();
    this.submitted = false;

    this.router.navigate(['/courses']);
  }
}
