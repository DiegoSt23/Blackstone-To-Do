// Redux
import { updateTask, deleteTask } from "../../../redux/actions/tasksActions";
import { useDispatch } from "react-redux";

// MUI
import { Box, Divider, Typography } from "@mui/material";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import ClearIcon from "@mui/icons-material/Clear";

const SingleTask = ({ task, dueDate, isCompleted, index }) => {
  const dispatch = useDispatch();

  const dueDateFormatter = () => {
    const dateArray = dueDate.split("-");
    const year = dateArray[0].slice(2);
    const month = dateArray[1];
    const day = dateArray[2];
    return `${year}/${month}/${day}`;
  };

  const handleUpdateTask = () => {
    dispatch(updateTask({ index: index, isCompleted: isCompleted }));
  };

  const handleDeleteTask = () => {
    dispatch(deleteTask(task));
  };

  return (
    <>
      <Box
        sx={{
          width: 1,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: "15px 0px",
        }}
      >
        {isCompleted ? (
          <CheckBoxIcon
            onClick={handleUpdateTask}
            color="primary"
            sx={{ cursor: "pointer" }}
          />
        ) : (
          <CheckBoxOutlineBlankIcon
            onClick={handleUpdateTask}
            color="disabled"
            sx={{ cursor: "pointer" }}
          />
        )}
        <Box
          sx={{
            width: 4 / 5,
          }}
        >
          <Typography variant="h6" color="#646464">
            {task}
          </Typography>
          {!isCompleted && (
            <Typography variant="p" color="#a1a1a1">
              Due date: {dueDateFormatter()}
            </Typography>
          )}
        </Box>
        <ClearIcon onClick={handleDeleteTask} className="delete-icon" />
      </Box>
      <Divider />
    </>
  );
};

export default SingleTask;
