// React Router
import { NavLink } from "react-router-dom";

// MUI
import { Typography, Button } from "@mui/material";

const Error = () => {
  return (
    <>
      <Typography variant="p">This page can't be found.</Typography>
      <NavLink to="/" className="link">
        <Button variant="contained" sx={{ mt: 2 }}>
          Back Home
        </Button>
      </NavLink>
    </>
  );
};

export default Error;
