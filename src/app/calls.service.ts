import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CallsService {
  constructor(private http: HttpClient) {}

  statuses = [0, 0, 0];

  initalCalls() {
    forkJoin([
      this.http.get('http://localhost:8000/api.php?timeout=1').pipe(
        tap((res: any) => {
          console.log(res);
          this.statuses[0] = 1;
        })
      ),
      this.http.get('http://localhost:8000/api.php?timeout=5').pipe(
        tap((res: any) => {
          console.log(res);
          this.statuses[1] = 1;
        })
      ),
      this.http.get('http://localhost:8000/api.php?timeout=3').pipe(
        tap((res: any) => {
          console.log(res);
          this.statuses[2] = 1;
        })
      ),
    ]).subscribe((allResults) => console.log(allResults));
  }
}
