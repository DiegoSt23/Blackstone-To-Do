import { types } from "../types/types";

export const createNewTask =
  ({ task, dueDate }) =>
  (dispatch) => {
    dispatch(addNewTask({ task: task, dueDate: dueDate, isCompleted: false }));
  };

export const updateTask =
  ({ index, isCompleted }) =>
  (dispatch) => {
    dispatch(updateExistingTask({ index: index, isCompleted: isCompleted }));
  };

export const deleteTask = (task) => (dispatch) => {
  dispatch(deleteExistingTask(task));
};

const addNewTask = (payload) => ({
  type: types.createNewTask,
  payload,
});

const updateExistingTask = (payload) => ({
  type: types.updateTask,
  payload,
});

const deleteExistingTask = (payload) => ({
  type: types.deleteTask,
  payload,
});
