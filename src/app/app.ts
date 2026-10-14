import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CourseFormComponent } from './pages/course-form/course-form';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CourseFormComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}