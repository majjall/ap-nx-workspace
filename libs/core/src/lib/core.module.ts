import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { CounterEffects } from "./counter/counter.effects";

import { counterReducer } from "./counter/counter.reducer";
import { counterInitialState } from "./counter/counter.state";

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature("counter", counterReducer, { initialState: counterInitialState }),
    EffectsModule.forFeature([CounterEffects])
  ],
  providers: [CounterEffects],
  declarations: [],
  exports: []
})
export class CoreModule {}
