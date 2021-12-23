// React Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Header from "./header/Header";
import Form from "./form/Form";
import Tasks from "./tasks/Tasks";
import Error from "./error/Error";

// MUI
import { Container } from "@mui/material";

const MainComponent = () => {
  return (
    <>
      <Router>
        <Header />
        <Container
          maxWidth="sm"
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Routes>
            <Route path="/" element={<Form />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Container>
      </Router>
    </>
  );
};

export default MainComponent;
