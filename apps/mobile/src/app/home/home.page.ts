import { Component } from "@angular/core";

import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { AppState } from "../../app/app.state";
import { CounterActions } from "@ap-nx-workspace/core";

@Component({
  selector: "mobile-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  counter$: Observable<number>;

  constructor(private store: Store<AppState>) {
    this.counter$ = this.store.pipe(select("counter", "total"));
  }

  decrement() {
    this.store.dispatch(new CounterActions.DecrementAction());
  }

  increment() {
    this.store.dispatch(new CounterActions.IncrementAction());
  }

  reset() {
    this.store.dispatch(new CounterActions.ResetAction());
  }
}
