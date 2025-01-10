import { IStudent } from "../types";

// Define action types
export const ADD_STUDENT = 'ADD_STUDENT';
export const REMOVE_FIRST = 'REMOVE_FIRST';
export const UPDATE_ABSENTS = 'UPDATE_ABSENTS';
export const INITIALIZE_STATE = 'INITIALIZE_STATE';

// Define the shape of the state
export interface IState {
  studentsList: IStudent[];
  totalAbsents: number;
}

// Define the shape of actions
export interface IAction {
  type: string;
  payload?: any;
}

// Initial state
export const initialState: IState = {
  studentsList: [],
  totalAbsents: 0,
};

// Reducer function
export const studentReducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case ADD_STUDENT:
      return {
        ...state,
        studentsList: [action.payload, ...state.studentsList],
      };
    case REMOVE_FIRST:
      return {
        ...state,
        studentsList: state.studentsList.slice(1),
      };
    case UPDATE_ABSENTS:
      return {
        ...state,
        totalAbsents: state.totalAbsents + action.payload.change,
        studentsList: state.studentsList.map((student) =>
          student.id === action.payload.id
            ? { ...student, absents: student.absents + action.payload.change }
            : student
        ),
      };
    case INITIALIZE_STATE:
      return {
        studentsList: action.payload.studentsList,
        totalAbsents: action.payload.totalAbsents,
      };
    default:
      return state;
  }
};
