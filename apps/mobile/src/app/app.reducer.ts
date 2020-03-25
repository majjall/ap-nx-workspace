import { ActionReducerMap } from "@ngrx/store";
import { counterReducer } from "@ap-nx-workspace/core";
import { AppState } from "./app.state";

export const reducers: ActionReducerMap<AppState> = {
  counter: counterReducer
};
