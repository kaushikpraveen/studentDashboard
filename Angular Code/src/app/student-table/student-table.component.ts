import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentsResponse } from '../models/students-response';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.css']
})
export class StudentTableComponent implements OnInit {

  constructor(private http: HttpClient) { }

  studentsSvcUrl='http://localhost:8080/students';
  students :  StudentsResponse[] =[];
  color='black';
  TotalArr=[];
  status='pass';
  ngOnInit() {

   this.fetchStudents().subscribe(data => {
    console.log(data);

    for( let i=0;i<data.length;i++) {
      const student = new StudentsResponse();
      console.log(data[i].name);
      student.name=data[i].name;
      student.marks=data[i].marks;
      student.rollNumber=data[i].rollNumber;

      const maths=parseFloat(student.marks.maths);
      const english=parseFloat(student.marks.english);
      const science=parseFloat(student.marks.science);
      student.marks.total = maths + english + science;
      this.passOrfail(maths,english,science);
      student.status=this.status;
      student.color=this.color;
      this.students[i]=student;

      this.TotalArr.push(student.marks.total);
      if(i == data.length-1){
       const maxIndex=this.TotalArr.indexOf(Math.max(...this.TotalArr));
       this.students[maxIndex].status="Topper";
       this.students[maxIndex].color="Green";
      }
        }
        console.log(this.students);



  },
  err => {
    console.log("Error occured.")
  }
  );



}

  private fetchStudents(): Observable<StudentsResponse> {
    return this.http.get<StudentsResponse>(this.studentsSvcUrl);
  }

  private passOrfail(maths:any,english:any,science:any){    
    if(maths<50 || english<50 || science<50){
      this.status='Fail';
      this.color='red';
    }
    else {
      this.status='Pass';
      this.color='black';
    }
    console.log(this.TotalArr)
  }
}
