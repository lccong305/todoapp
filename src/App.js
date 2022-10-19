import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EditTodo from "./features/todo/EditTodo";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Todo from "./pages/Todo";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <MainLayout>
                <Home />
              </MainLayout>
            }
          />
          <Route
            path="/home"
            element={
              <MainLayout>
                <Home />
              </MainLayout>
            }
          />
          <Route
            path="/todo"
            element={
              <MainLayout>
                <Todo />
              </MainLayout>
            }
          />
          <Route
            path="/update"
            element={
              <MainLayout>
                <EditTodo />
              </MainLayout>
            }
          />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
