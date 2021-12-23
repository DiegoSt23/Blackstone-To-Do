import { types } from "../types/types";

const initialState = {
  tasks: [],
  errorMessage: "",
};

export const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.createNewTask:
      if (!state.tasks.some((item) => item.task === action.payload.task)) {
        return {
          ...state,
          tasks: [action.payload, ...state.tasks],
          errorMessage: "",
        };
      } else {
        return {
          ...state,
          errorMessage: "This task has already been saved.",
        };
      }
    case types.updateTask:
      return {
        ...state,
        ...(state.tasks[action.payload.index].isCompleted =
          !action.payload.isCompleted),
      };
    case types.deleteTask:
      return {
        tasks: state.tasks.filter((item) => item.task !== action.payload),
      };
    default:
      return state;
  }
};
