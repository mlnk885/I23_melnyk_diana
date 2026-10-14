import { Injectable } from '@angular/core';

export interface Course {
  id: number;
  title: string;
  teacher: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private courses: Course[] = [
    {
      id: 1,
      title: 'HTML та CSS',
      teacher: 'Олександр',
      description: 'Основи створення та оформлення вебсторінок за допомогою HTML і CSS.'
    },
    {
      id: 2,
      title: 'JavaScript',
      teacher: 'Марія',
      description: 'Вивчення основ програмування та створення інтерактивних вебсторінок.'
    },
    {
      id: 3,
      title: 'Angular',
      teacher: 'Іван Петренко',
      description: 'Основи створення Angular-застосунків.'
    }
  ];

  getItems(): Course[] {
    return this.courses;
  }

  getItemById(id: number): Course | undefined {
    return this.courses.find(course => course.id === id);
  }

  addItem(item: Omit<Course, 'id'>): void {
    const newId = this.courses.length > 0
      ? Math.max(...this.courses.map(course => course.id)) + 1
      : 1;

    this.courses.push({
      id: newId,
      ...item
    });
  }
}