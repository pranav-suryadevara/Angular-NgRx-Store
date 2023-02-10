import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer,
  on,
} from "@ngrx/store";
import { AuthActions } from "../action-types";
import { User } from "../model/user.model";

export const authFeatureKey = "auth";

export interface AuthState {
  user: User;
}

export const initialAuthState: AuthState = { user: undefined };

export const authReducer = createReducer(
  initialAuthState,
  on(AuthActions.login, (state, action) => {
    // state.user = action.user;
    // return state; // this implementation breaks the time travelling debuggers. Breaks onPush ChangeDetection
    return { user: action.user };
  }),
  on(AuthActions.logout, (state, action) => {
    return { user: undefined };
  })
);
