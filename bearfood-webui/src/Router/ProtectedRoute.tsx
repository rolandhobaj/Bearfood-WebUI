import { Navigate } from "react-router-dom";
import { useAuth } from "../Context/useAuth";

type Props = { children: React.ReactNode };

function ProtectedRoute ({ children }: Props) {
    const { isLoggedIn } = useAuth();
    return isLoggedIn() ? (
      <>{children}</>
    ) : (
      <Navigate to="/" replace />
    );
  };
  
export default ProtectedRoute;