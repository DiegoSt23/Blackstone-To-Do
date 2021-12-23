// Redux
import { logout } from "../../../redux/actions/loginActions";
import { useDispatch } from "react-redux";

// MUI
import { Box, Button, Typography } from "@mui/material";

const Header = () => {
  const dispatch = useDispatch();

  const handleLogout = () => dispatch(logout());

  return (
    <Box
      sx={{
        width: 1,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        bgcolor: "#f1f1f1",
        zIndex: 1,
        position: "fixed",
      }}
      p={{ padding: 10 }}
    >
      <Typography variant="h5" color="#2d79db">
        TodoApp
      </Typography>
      <Button variant="outlined" onClick={handleLogout}>
        Logout
      </Button>
    </Box>
  );
};

export default Header;
