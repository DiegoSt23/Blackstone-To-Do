// React Router
import { NavLink } from "react-router-dom";

// Redux
import { createNewTask } from "../../../redux/actions/tasksActions";
import { useDispatch, useSelector } from "react-redux";

// MUI
import { Box, TextField, Button, Typography, Alert } from "@mui/material";

// Formik
import { useFormik } from "formik";
import * as yup from "yup";

const Form = () => {
  const dispatch = useDispatch();
  const { tasks, errorMessage } = useSelector((state) => state.tasks);
  const totalTasks = tasks.length;

  const validationSchema = yup.object({
    task: yup.string().required("Task is required"),
    dueDate: yup.string().required("Due date is required"),
  });

  const formik = useFormik({
    initialValues: {
      task: "",
      dueDate: "",
    },
    validationSchema,
    onSubmit: (values) => {
      dispatch(createNewTask(values));
    },
  });

  return (
    <Box
      sx={{
        width: 1,
        display: "flex",
        flexDirection: "column",
        borderRadius: 1,
        boxShadow: 5,
        bgcolor: "#1f2025",
        mt: 15,
        mb: 5,
      }}
      p={{ padding: 30 }}
    >
      <Typography variant="h4" color="#2d79db">
        Create New Task
      </Typography>
      <Typography variant="p" color="#a1a1a1">
        Please enter your task and select a due date.
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          value={formik.values.task}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          id="task"
          label="Enter your task"
          name="task"
          variant="outlined"
          margin="normal"
        />
        {formik.touched.task && formik.errors.task && (
          <Alert severity="error">{formik.errors.task}</Alert>
        )}
        <TextField
          value={formik.values.dueDate}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          id="dueDate"
          name="dueDate"
          variant="outlined"
          margin="normal"
          type="date"
        />
        {formik.touched.dueDate && formik.errors.dueDate && (
          <Alert severity="error">{formik.errors.dueDate}</Alert>
        )}
        {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
        <Button variant="contained" type="submit" sx={{ mt: 2 }}>
          CREATE
        </Button>
        <Box
          sx={{
            width: 1,
            display: "flex",
            justifyContent: "flex-end",
            mt: 4,
          }}
        >
          <NavLink to="/tasks" className="link">
            <Typography variant="p">MY TASKS({totalTasks})</Typography>
          </NavLink>
        </Box>
      </form>
    </Box>
  );
};

export default Form;
