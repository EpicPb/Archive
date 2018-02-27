import { Component, OnInit } from '@angular/core';
import { Task } from '../shared/task.model';
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  taskList: Task [];
  constructor() { }

  ngOnInit() {
  //   Task.push(
  //     {
  //     $key: "0001",
  //     user_id: "201501003",
  //     task_name: "Do Thesis",
  //     task_description: "Just do thesis",
  //     start_date: "Feb 8, 2018",
  //     end_date: "Feb 20, 2018",
  //     task_level: "High",
  //     tags: ["personal"],
  //     is_complete: false,
  //     repeat: false,
  //     every: 0,
  //     every_timeFrame: "",
  //     every_week_days: {},
  //     every_month: "",
  //     ends: false,
  //     end_condition: "",
  //     end_condition_on: "",
  //     end_condition_after: 0
  //   },
  //   {
  //   $key: "0002",
  //   user_id: "201501003",
  //   task_name: "Change toothbrush",
  //   task_description: "Change toothbrush",
  //   start_date: "Feb 8, 2018",
  //   end_date: "",
  //   task_level: "low",
  //   tags: ["personal"],
  //   is_complete: false,
  //   repeat: true,
  //   every: 3,
  //   every_timeFrame: "months",
  //   every_week_days: {},
  //   every_month: "",
  //   ends: false,
  //   end_condition: "",
  //   end_condition_on: "",
  //   end_condition_after: 0
  // }
  //
  // );
  }

}
