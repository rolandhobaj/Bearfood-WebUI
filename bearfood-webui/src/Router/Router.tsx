import LoginForm from '../Authentication/LoginForm';
import {
  createBrowserRouter,
} from "react-router-dom";
import RegisterForm from '../Authentication/RegisterForm';
import App from '../App';
import Dashboard from '../Dashboard/Dashboard';
import ProtectedRoute from './ProtectedRoute';
import { StoreProvider } from '../Context/useStore';


export const router = createBrowserRouter([
  {
    path: "/",
    element: <div className="App"><App /> </div>,
    children: [
      { path: "", element: <LoginForm /> },
      { path: "register", element: <RegisterForm /> },
      { path: "dashboard", element: <StoreProvider><Dashboard /></StoreProvider> },
      //{ path: "dashboard", element: <ProtectedRoute> <Dashboard/> </ProtectedRoute>}
    ],
  },
]);
