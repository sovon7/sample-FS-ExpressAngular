import { Component } from '@angular/core';
import { Teacher } from '../teacher-service/teacher-service.service';

@Component({
  selector: 'app-teacher-main',
  templateUrl: './teacher-main.component.html',
  styleUrl: './teacher-main.component.scss'
})
export class TeacherMainComponent {
  editingTeacher: Teacher | null = null;

  startEditing(teacher: Teacher): void {
    this.editingTeacher = teacher;
  }
}
