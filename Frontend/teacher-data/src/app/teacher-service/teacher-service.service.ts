import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface Teacher {
  teacherId?: number;
  teacherName: string;
  degreeHold: string;
  specializationSubject: string;
  age: number;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class TeacherServiceService {

  constructor(private readonly httpClient: HttpClient) { }

  commonEndPoint = 'http://localhost:3000/api/v1';
  addTeacherEndPoint = this.commonEndPoint + '/add-teacher';
  listTeacherEndPoint = this.commonEndPoint + '/list-teacher';
  updateTeacherEndPoint = this.commonEndPoint + '/update-teacher';
  deleteTeacherEndPoint = this.commonEndPoint + '/delete-teacher';
  teacherListChanged = new Subject<void>();

  getTeacherList() {
    return this.httpClient.get<{ status: number; response: Teacher[] }>(this.listTeacherEndPoint);
  }

  addTeacher(teacher: Teacher) {
    return this.httpClient.post(this.addTeacherEndPoint, {
      tName: teacher.teacherName,
      degree: teacher.degreeHold,
      subject: teacher.specializationSubject,
      age: teacher.age,
      email: teacher.email
    });
  }

  updateTeacher(teacher: Teacher) {
    return this.httpClient.put(`${this.updateTeacherEndPoint}/${teacher.teacherId}`, {
      tName: teacher.teacherName,
      degree: teacher.degreeHold,
      subject: teacher.specializationSubject,
      age: teacher.age,
      email: teacher.email
    });
  }

  deleteTeacher(teacherId: number) {
    return this.httpClient.delete(`${this.deleteTeacherEndPoint}/${teacherId}`);
  }
}
