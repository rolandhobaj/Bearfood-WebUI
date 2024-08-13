import LoginForm from '../Authentication/LoginForm';
import {
  createBrowserRouter,
} from "react-router-dom";
import RegisterForm from '../Authentication/RegisterForm';
import App from '../App';
import Dashboard from '../Dashboard/Dashboard';


export const router = createBrowserRouter([
  {
    path: "/",
    element: <div className="App"><App /> </div>,
    children: [
      { path: "", element: <LoginForm /> },
      { path: "register", element: <RegisterForm /> },
      { path: "dashboard", element: <Dashboard/>}
    ],
  },
]);