import "./styles/global.css";

// Redux
import { useSelector } from "react-redux";

// Components
import Login from "./components/login/Login";
import MainComponent from "./components/home/MainComponent";

// MUI
import { createTheme, ThemeProvider } from "@mui/material/styles";

function App() {
  const { isLoggedIn } = useSelector((store) => store.login);

  const theme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        {!isLoggedIn ? <Login /> : <MainComponent />}
      </ThemeProvider>
    </>
  );
}

export default App;
