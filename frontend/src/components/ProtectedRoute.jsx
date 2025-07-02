import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children, allowedRoles }) => {
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');
  const firstLogin = localStorage.getItem('firstLogin');
  const location = useLocation();

  if (!token || !allowedRoles.includes(role)) {
    return <Navigate to="/login" replace />;
  }

  // Avoid redirect loop: only redirect if NOT already on /first-login-change
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
