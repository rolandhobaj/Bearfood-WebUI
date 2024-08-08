import './App.css'
import LoginForm from './Login/LoginForm';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginForm/>,
  },
  {
    path: "/register",
    element: <h1>Please register</h1>
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
