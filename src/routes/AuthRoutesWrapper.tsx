import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/useAuth";

const AuthRoutesWrapper = () => {
  const { isAuth } = useAuth();

  return !isAuth ? <Outlet /> : <Navigate to="/" replace />;
};

export default AuthRoutesWrapper;
