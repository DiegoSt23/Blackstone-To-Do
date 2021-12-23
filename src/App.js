import "./styles/global.css";

// Redux
import { useSelector } from "react-redux";

// Components
import Login from "./components/login/Login";
import MainComponent from "./components/home/MainComponent";

function App() {
  const { isLoggedIn } = useSelector((store) => store.login);

  return <>{!isLoggedIn ? <Login /> : <MainComponent />}</>;
}

export default App;
