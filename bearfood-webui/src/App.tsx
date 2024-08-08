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
]);

function App() {
  return (
    <div className="App">
       <RouterProvider router={router} />
   </div>
  );
}

export default App;
