import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
form:FormGroup;
  ngOnInit() {
    this.form = this.fb.group({
      name: ['', [Validators.required,Validators.maxLength(20)]],
      lastName: ['', [Validators.required,Validators.maxLength(20)]],
      class: ['', [Validators.required,]],
      passingYear: ['', [Validators.required,Validators.min(2000),Validators.max(2017),Validators.minLength(4),Validators.maxLength(4)]],
      percentage: ['', [Validators.required]],

    })
  }

}
