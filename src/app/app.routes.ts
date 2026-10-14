import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home';
import { CoursesComponent } from './pages/courses/courses';
import { CourseDetailComponent } from './pages/course-detail/course-detail';
import { AddCourseComponent } from './pages/add-course/add-course';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'courses',
    component: CoursesComponent
  },
  {
    path: 'courses/add',
    component: AddCourseComponent
  },
  {
    path: 'course/:id',
    component: CourseDetailComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];