import { types } from "../types/types";

export const createNewTask =
  ({ task, dueDate }) =>
  (dispatch) => {
    dispatch(addT({ task: task, dueDate: dueDate, isCompleted: false }));
  };

export const updateTask =
  ({ index, isCompleted }) =>
  (dispatch) => {
    dispatch(updateT({ index: index, isCompleted: isCompleted }));
  };

export const deleteTask = (task) => (dispatch) => {
  dispatch(deleteT(task));
};

const addT = (payload) => ({
  type: types.createNewTask,
  payload,
});

const updateT = (payload) => ({
  type: types.updateTask,
  payload,
});

const deleteT = (payload) => ({
  type: types.deleteTask,
  payload,
});
