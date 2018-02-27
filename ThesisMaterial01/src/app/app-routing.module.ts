import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskListComponent } from './tasks/task-list/task-list.component';
import { TasksComponent } from './tasks/tasks.component';
import { CalendarComponent } from './calendar/calendar.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path:'', component: HomeComponent },
  { path:'task', component: TasksComponent },
  { path:'calendar', component: CalendarComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
