import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, isAllowed, redirectPath = "/login" }) => {
  if (!isAllowed) {
    return <Navigate to={redirectPath} />;
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoute;
