import { Injectable } from "@angular/core";
import { Actions } from "@ngrx/effects";

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions) {
    actions$.subscribe((action) => {
      // no error handling here
      if (action.type === "[Login Page] User Login") {
        // Repeating here the action type
        localStorage.setItem("user", JSON.stringify(action["user"])); // there is not type safety here
      }
    });
  }
}
