import { Component, Input } from '@angular/core';
import { Teacher, TeacherServiceService } from '../teacher-service/teacher-service.service';

@Component({
  selector: 'app-teacher-add',
  templateUrl: './teacher-add.component.html',
  styleUrl: './teacher-add.component.scss'
})
export class TeacherAddComponent {
  teacher: Teacher = {
    teacherName: '',
    degreeHold: '',
    specializationSubject: '',
    age: 0,
    email: ''
  };
  editing = false;
  successMessage = '';
  private successTimeout?: ReturnType<typeof setTimeout>;

  @Input() set editingTeacher(teacher: Teacher | null) {
    if (teacher) {
      this.teacher = { ...teacher };
      this.editing = true;
    }
  }

  constructor(private readonly teacherService: TeacherServiceService) {}

  onSubmit(): void {
    const request = this.editing
      ? this.teacherService.updateTeacher(this.teacher)
      : this.teacherService.addTeacher(this.teacher);

    request.subscribe({
      next: () => {
        this.teacherService.teacherListChanged.next();
        this.showSuccess(this.editing ? 'Teacher updated successfully.' : 'Teacher added successfully.');
        this.resetForm();
      },
      error: (error) => console.error('Failed to save teacher:', error)
    });
  }

  editTeacher(teacher: Teacher): void {
    this.teacher = { ...teacher };
    this.editing = true;
  }

  private resetForm(): void {
    this.teacher = {
      teacherName: '',
      degreeHold: '',
      specializationSubject: '',
      age: 0,
      email: ''
    };
    this.editing = false;
  }

  private showSuccess(message: string): void {
    this.successMessage = message;
    if (this.successTimeout) {
      clearTimeout(this.successTimeout);
    }
    this.successTimeout = setTimeout(() => this.successMessage = '', 3500);
  }
}
