import { isDevMode } from "@angular/core";
import { routerReducer } from "@ngrx/router-store";
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from "@ngrx/store";

export interface AppState {}

export const reducers: ActionReducerMap<AppState> = { router: routerReducer };

export function logger(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state, action) => {
    console.log("state before: ", state);
    console.log("Action", action);

    return reducer(state, action); // passing the action and state to the next reducers in the chain.
  };
}

export const metaReducers: MetaReducer<AppState>[] = isDevMode()
  ? [logger]
  : []; // adding the reducers in the develop environment.
// metaReducers are going to be executed in the order they are put in this array.
