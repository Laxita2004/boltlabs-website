import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, allowedRoles }) => {
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');
  const firstLogin = localStorage.getItem('firstLogin');

  if (!token || !allowedRoles.includes(role)) {
    return <Navigate to="/login" replace />;
  }

  // If it's a member and firstLogin is true, redirect to password change
  if (role === 'member' && firstLogin === 'true') {
    return <Navigate to="/first-login-change" replace />;
  }

  return children;
};

export default ProtectedRoute;
