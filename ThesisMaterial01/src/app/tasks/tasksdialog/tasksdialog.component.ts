import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tasksdialog',
  templateUrl: './tasksdialog.component.html',
  styleUrls: ['./tasksdialog.component.css']
})
export class TasksdialogComponent {
  options: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<TasksdialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    fb: FormBuilder) {
        this.options = fb.group({
          floatLabel:'never'
        })
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  }
