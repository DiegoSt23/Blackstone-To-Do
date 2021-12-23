//React Router
import { NavLink } from "react-router-dom";

//Redux
import { useSelector } from "react-redux";

// Components
import SingleTask from "./SingleTask";

// MUI
import { Box, Typography } from "@mui/material";

const Tasks = () => {
  const { tasks } = useSelector((state) => state.tasks);
  console.log(tasks);

  const tasksList = tasks?.map((item, index) => (
    <SingleTask
      key={index}
      task={item.task}
      dueDate={item.dueDate}
      isCompleted={item.isCompleted}
      index={index}
    />
  ));

  return (
    <Box
      sx={{
        width: 1,
        display: "flex",
        flexDirection: "column",
        borderRadius: 1,
        boxShadow: 5,
        bgcolor: "white",
        mt: 15,
        mb: 5,
      }}
      p={{ padding: 30 }}
    >
      <Typography variant="h4" color="#2d79db">
        My Tasks
      </Typography>
      {tasks.length > 0 ? (
        <Box
          sx={{
            width: 1,
            display: "flex",
            flexDirection: "column",
            mt: 2,
          }}
        >
          {tasksList}
        </Box>
      ) : (
        <Typography
          variant="p"
          color="#a1a1a1"
          sx={{ mt: 4, textAlign: "center" }}
        >
          So empty, use the option below to add some tasks.
        </Typography>
      )}

      <Box
        sx={{
          width: 1,
          display: "flex",
          justifyContent: "flex-end",
          mt: 4,
        }}
      >
        <NavLink to="/" className="link">
          <Typography variant="p">CREATE NEW TASK</Typography>
        </NavLink>
      </Box>
    </Box>
  );
};

export default Tasks;
