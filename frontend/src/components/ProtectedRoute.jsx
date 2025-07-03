import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children, allowedRoles }) => {
<<<<<<< HEAD
  // const token = localStorage.getItem('token');
  // const role = localStorage.getItem('role');
  // const firstLogin = localStorage.getItem('firstLogin');
=======
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');
  const firstLogin = localStorage.getItem('firstLogin');
  const location = useLocation();
>>>>>>> 6e30e7e332bda6c48fb4bc4c578e76b1eee107e8

  // if (!token || !allowedRoles.includes(role)) {
  //   return <Navigate to="/login" replace />;
  // }

<<<<<<< HEAD
  // // If it's a member and firstLogin is true, redirect to password change
  // if (role === 'member' && firstLogin === 'true') {
  //   return <Navigate to="/first-login-change" replace />;
  // }
=======
  // Avoid redirect loop: only redirect if NOT already on /first-login-change
  if (
    role === 'member' &&
    firstLogin === 'true' &&
    location.pathname !== '/first-login-change'
  ) {
    return <Navigate to="/first-login-change" replace />;
  }
>>>>>>> 6e30e7e332bda6c48fb4bc4c578e76b1eee107e8

  return children;
};

export default ProtectedRoute;
