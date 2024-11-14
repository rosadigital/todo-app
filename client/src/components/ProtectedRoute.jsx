// ProtectedRoute component to ensure authentication

import { useAuth } from "../contexts/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { auth } = useAuth();
  return auth ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
