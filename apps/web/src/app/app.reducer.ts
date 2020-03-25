import { ActionReducerMap } from "@ngrx/store";
import { AppState } from "./app.state";
import { counterReducer } from "@ap-nx-workspace/core";

export const reducers: ActionReducerMap<AppState> = {
  counter: counterReducer
};
