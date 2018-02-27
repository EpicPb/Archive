import { Component, OnInit, Inject } from '@angular/core';
import { Task } from './shared/task.model';
import { TasksService } from './shared/tasks.service';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TasksdialogComponent } from './tasksdialog/tasksdialog.component';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
  providers: [TasksService]

})
export class TasksComponent {
  animal: string;
  name: string;

  constructor(private tasksService: TasksService, public dialog: MatDialog) { }

  ngOnInit() {
      this.resetForm();
    }

    onSubmit(taskForm: NgForm){
      if(taskForm.value.$key == null)
        this.tasksService.insertTask(taskForm.value);
      else
        this.tasksService.updateTask(taskForm.value);
      this.resetForm(taskForm);
      // this.tostr.success('Submitted Succesfully', 'Employee Register');

    }

    resetForm(taskForm?: NgForm){
      if(taskForm != null)
        taskForm.reset();

      // this.tasksService.selectedTask = {
      //
      // }

    }

    openDialog(): void {
    let dialogRef = this.dialog.open(TasksdialogComponent, {
      width: '50vw',
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

}
