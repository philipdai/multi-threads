import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';
import { CallsService } from './calls.service';
import { MatDialog } from '@angular/material/dialog';
import { ProgressComponent } from './progress/progress.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'multiple-threads';

  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  openProgress() {
    const dialogRef = this.dialog.open(ProgressComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed with result:', result);
    });
  }
}
