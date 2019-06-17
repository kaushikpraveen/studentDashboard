import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StudentTableComponent } from './student-table/student-table.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { Global } from './global';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    StudentTableComponent,
    StudentFormComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [Global,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
