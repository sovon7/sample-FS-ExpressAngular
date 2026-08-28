import { Component, EventEmitter, Output } from '@angular/core';
import { Teacher, TeacherServiceService } from '../teacher-service/teacher-service.service';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrl: './teacher-list.component.scss'
})
export class TeacherListComponent {
  teachers: Teacher[] = [];
  @Output() editRequested = new EventEmitter<Teacher>();
  teacherToDelete: Teacher | null = null;
  successMessage = '';
  private successTimeout?: ReturnType<typeof setTimeout>;

  constructor(private readonly teacherService: TeacherServiceService) {
    this.loadTeachers();
    this.teacherService.teacherListChanged.subscribe(() => this.loadTeachers());
  }

  loadTeachers(): void {
    this.teacherService.getTeacherList().subscribe({
      next: (result) => this.teachers = result.response,
      error: (error) => console.error('Failed to load teacher list:', error)
    });
  }

  deleteTeacher(teacher: Teacher): void {
    this.teacherToDelete = teacher;
  }

  cancelDelete(): void {
    this.teacherToDelete = null;
  }

  confirmDelete(): void {
    if (!this.teacherToDelete?.teacherId) {
      return;
    }

    const teacherName = this.teacherToDelete.teacherName;
    this.teacherService.deleteTeacher(this.teacherToDelete.teacherId).subscribe({
      next: () => {
        this.teacherToDelete = null;
        this.showSuccess(`${teacherName} was deleted successfully.`);
        this.teacherService.teacherListChanged.next();
      },
      error: (error) => console.error('Failed to delete teacher:', error)
    });
  }

  private showSuccess(message: string): void {
    this.successMessage = message;
    if (this.successTimeout) {
      clearTimeout(this.successTimeout);
    }
    this.successTimeout = setTimeout(() => this.successMessage = '', 3500);
  }

  editTeacher(teacher: Teacher): void {
    this.editRequested.emit(teacher);
  }
}
