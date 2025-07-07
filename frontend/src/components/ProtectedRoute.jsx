import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children, allowedRoles }) => {
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');
  const firstLogin = localStorage.getItem('firstLogin');
  const location = useLocation();

  // If user not logged in OR role not allowed, send to login
  if (!token || !allowedRoles.includes(role)) {
    return <Navigate to="/login" replace />;
  }

  // If member's first login, force them to change password
  if (
    role === 'member' &&
    firstLogin === 'true' &&
    location.pathname !== '/first-login-change'
  ) {
    return <Navigate to="/first-login-change" replace />;
  }

  return children;
};

export default ProtectedRoute;
