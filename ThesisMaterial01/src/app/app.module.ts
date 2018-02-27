import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskComponent } from './tasks/task/task.component';
import { TaskListComponent } from './tasks/task-list/task-list.component';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { AnnouncementComponent } from './announcements/announcement/announcement.component';
import { AnnouncementListComponent } from './announcements/announcement-list/announcement-list.component';
import { TasksdialogComponent } from './tasks/tasksdialog/tasksdialog.component';


import { MatDialogModule } from '@angular/material/dialog';
import { MaterialModule } from './material.module';
import { FormsModule, FormBuilder } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarComponent } from './calendar/calendar.component';

// import { CalendarModule } from "ap-angular2-fullcalendar";
// import { ViewChild } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment }from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TasksComponent,
    TaskComponent,
    TaskListComponent,
    AnnouncementsComponent,
    AnnouncementComponent,
    AnnouncementListComponent,
    CalendarComponent,
    TasksdialogComponent


  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
  ],
  entryComponents:[
    TasksdialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
