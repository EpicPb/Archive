import { Injectable } from '@angular/core';
import { Task } from './task.model';
import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';

@Injectable()
export class TasksService {
  taskList: AngularFireList<any>;
  selectedTask: Task = new Task();
  constructor(private firebase: AngularFireDatabase) { }
  getData(){
    this.taskList = this.firebase.list('Tasks');
    return this.taskList;
  }
  insertTask(task: Task){
    this.taskList.push({
    });
  }

  updateTask(task: Task){
    this.taskList.update(task.$key,
    {
    });
  }

  deleteTask($key: string){
    this.taskList.remove($key);
  }
}
