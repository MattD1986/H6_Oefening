import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { StudentenService } from './core/studenten.service';
import { Student } from './shared/model/student.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  students$: Observable<Student[]>;

  constructor(private studentService: StudentenService){}

  ngOnInit(){
    this.students$ = this.studentService.getStudents();
  }
}
