import { Component, OnInit } from "@angular/core";
import { interval, Observable, Subject, combineLatest } from "rxjs";
import { tap, takeWhile, takeUntil, switchMap, map } from "rxjs/operators";

enum TimerResult {
  COMPLETE,
  ABORTED,
  SKIPPED
}
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  name = "Angular";
  result;
  simpleTimer$ = interval(100);
  _notifier: Subject<TimerResult> = new Subject();
  notifier$: Observable<TimerResult> = this._notifier.asObservable();
  ngOnInit() { }
  startTimer(): Observable<any> {
    const timer$ = this.simpleTimer$.pipe(
      tap((res) => this.result = res),
      takeUntil(this.notifier$)
    );
    return combineLatest(timer$, this.notifier$)
  }
  end() {
    this._notifier.next(TimerResult.ABORTED)
  }
  start() {
    this.startTimer().subscribe(([timer, action]) => {
      this.result = "end:" + timer + " action:" + action
    })
  }
}
