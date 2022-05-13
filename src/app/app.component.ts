import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { tap } from 'rxjs';
import { StudentenService } from './core/studenten.service';
import { Student } from './shared/model/student.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  students: Student[];

  constructor(private studentService: StudentenService){}

  ngOnInit(){
    this.studentService.getStudents().subscribe(students => this.students = students)
  }
}
