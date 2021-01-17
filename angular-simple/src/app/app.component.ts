import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { interval, Observable, Subject, combineLatest } from "rxjs";
import { tap, takeWhile, takeUntil, switchMap, map } from "rxjs/operators";
import { LOADING_STENCIL_ROUTES_URLS } from "./loading-stencil/loading-stencil.constants";

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

  navRoutes: any = null;

  constructor(
    private router: Router
  ) {}
  
  ngOnInit() {
    this.navRoutes = LOADING_STENCIL_ROUTES_URLS;
  }

  navToPage(page) {
    console.log('AppComponent, navToPage, page = ' + page);
    this.router.navigateByUrl(page);
  }

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

  valueEmittedFromChildComponent: string;
  
  parentEventHandlerFunction(valueEmitted) {
    this.valueEmittedFromChildComponent = valueEmitted;
  }
}