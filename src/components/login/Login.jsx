// Redux
import { login } from "../../redux/actions/loginActions";
import { useDispatch, useSelector } from "react-redux";

// Formik
import { useFormik } from "formik";
import * as yup from "yup";

// MUI
import {
  TextField,
  Button,
  Box,
  Container,
  Typography,
  Alert,
} from "@mui/material";

const Login = () => {
  const dispatch = useDispatch();
  const { errorMessage } = useSelector((state) => state.login);

  const validationSchema = yup.object({
    user: yup.string().required("User is required"),
    password: yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      user: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      dispatch(login(values));
    },
  });

  return (
    <Container
      maxWidth="sm"
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          borderRadius: 1,
          bgcolor: "#1f2025",
          boxShadow: 5,
        }}
        p={{ padding: 30 }}
      >
        <Typography variant="h2" color="#2d79db">
          Login
        </Typography>
        <Typography variant="p" color="#a1a1a1">
          Welcome, please enter your user and password.
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            value={formik.values.user}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            id="outlined-basic"
            name="user"
            label="User"
            variant="outlined"
            margin="normal"
          />
          {formik.touched.user && formik.errors.user && (
            <Alert severity="error">{formik.errors.user}</Alert>
          )}
          <TextField
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            id="outlined-basic-2"
            name="password"
            label="Password"
            variant="outlined"
            margin="normal"
            type="password"
          />
          {formik.touched.password && formik.errors.password && (
            <Alert severity="error">{formik.errors.password}</Alert>
          )}
          <Button variant="contained" type="submit" sx={{ mt: 2 }}>
            Submit
          </Button>
          {errorMessage && (
            <Alert severity="error" sx={{ mt: 2 }}>
              Invalid Credentials
            </Alert>
          )}
        </form>
      </Box>
    </Container>
  );
};

export default Login;
