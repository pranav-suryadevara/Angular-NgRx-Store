import { EntityState } from "@ngrx/entity/src/models";
import { Course } from "../model/course";

// time consuming and verbose way
// export interface CoursesState {
//   entities: { [key: number]: Course };
//   ids: number[];
// }

export interface CoursesState extends EntityState<Course> {}
