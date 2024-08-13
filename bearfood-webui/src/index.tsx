import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import LoginForm from './Authentication/LoginForm';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import RegisterForm from './Authentication/RegisterForm';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <div className="App"><App /> </div>,
    children: [
      { path: "", element: <LoginForm /> },
      { path: "register", element: <RegisterForm /> },
      { path: "dashboard", element: <h1>Welcome!</h1>}
    ],
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
