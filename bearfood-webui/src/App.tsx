import './App.css'
import {
  Outlet,
} from "react-router-dom";
import { UserProvider } from './Context/useAuth';


function App() {
  return (
      <UserProvider>
          <Outlet />
       </UserProvider>
  );
}

export default App;
