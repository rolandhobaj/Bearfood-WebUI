import './App.css'
import LoginForm from './Authentication/LoginForm';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import RegisterForm from './Authentication/RegisterForm';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginForm/>,
  },
  {
    path: "/register",
    element: <RegisterForm/>
  },
  {
    path: "/dashboard",
    element: <h1>Welcome to dashboard</h1>
  },
]);

function App() {
  return (
    <div className="App">
       <RouterProvider router={router} />
   </div>
  );
}

export default App;
