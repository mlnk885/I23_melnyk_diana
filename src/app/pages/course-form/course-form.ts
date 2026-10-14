import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-course-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './course-form.html',
  styleUrl: './course-form.css'
})
export class CourseFormComponent {
  submitted = false;

  newItem = {
    title: '',
    teacher: '',
    description: ''
  };

  courses: {
    title: string;
    teacher: string;
    description: string;
  }[] = [
    {
      title: 'Angular',
      teacher: 'Іван Петренко',
      description: 'Курс з основ розробки застосунків на Angular.'
    }
  ];

  addItem(form: NgForm): void {
    this.submitted = true;

    if (form.invalid) {
      return;
    }

    this.courses.push({
      title: this.newItem.title.trim(),
      teacher: this.newItem.teacher.trim(),
      description: this.newItem.description.trim()
    });

    form.resetForm({
      title: '',
      teacher: '',
      description: ''
    });

    this.newItem = {
      title: '',
      teacher: '',
      description: ''
    };

    this.submitted = false;
  }
}