import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CallsService } from '../calls.service';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css'],
})
export class ProgressComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ProgressComponent>,
    public callService: CallsService
  ) {}

  ngOnInit(): void {
    this.callService.initalCalls();
  }

  closeDialog() {
    this.dialogRef.close('Pizza!');
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
