import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Student } from '../shared/model/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentenService {

  constructor(private http: HttpClient){}


  getStudents(): Observable<Student[]>{
    return this.http
    .get<Student[]>('../assets/data/studenten.json')
    .pipe(tap (result => console.log('Via Service: ', result))
    );
  }

}
