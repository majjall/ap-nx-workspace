import { Component, HostBinding } from "@angular/core";

import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { AppState } from "./app.state";
import { CounterActions, CounterState } from "@ap-nx-workspace/core";

@Component({
  selector: "web-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "web";

  @HostBinding("attr.class") class = "mx-auto";

  counter$: Observable<CounterState>;

  constructor(private store: Store<AppState>) {
    this.counter$ = this.store.pipe(select("counter"));
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
