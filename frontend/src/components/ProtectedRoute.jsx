import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children, allowedRoles }) => {
<<<<<<< HEAD
  // const token = localStorage.getItem('token');
  // const role = localStorage.getItem('role');
  // const firstLogin = localStorage.getItem('firstLogin');

  // if (!token || !allowedRoles.includes(role)) {
  //   return <Navigate to="/login" replace />;
  // }

  // // If it's a member and firstLogin is true, redirect to password change
  // if (role === 'member' && firstLogin === 'true') {
  //   return <Navigate to="/first-login-change" replace />;
  // }
=======
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
>>>>>>> b0cd3b99a5687a8e006efa9225a83517263d02b5

  return children;
};

export default ProtectedRoute;
