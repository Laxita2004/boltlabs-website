import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;

// ✅ Function to verify token and return user payload
export const verifyTokenValidity = (token) => {
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    return decoded; // { id, role, ... }
  } catch (error) {
    return null; // invalid token
  }
};

// ✅ Middleware to authenticate user for protected routes
export const authenticateUser = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Unauthorized: No token provided' });
  }

  const token = authHeader.split(' ')[1];
  const decoded = verifyTokenValidity(token);

  if (!decoded) {
    return res.status(401).json({ error: 'Unauthorized: Invalid or expired token.' });
  }

  // Normalize user payload
  req.user = {
    id: decoded.id || decoded.user_id || decoded.admin_id || decoded.member_id,
    role: decoded.role
  };

  next();
};


// ✅ Alias for authenticateUser (for backward compatibility)
export const authenticate = authenticateUser;

// ✅ Middleware to authenticate team members specifically
export const authenticateTeamMember = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Unauthorized: No token provided' });
  }

  const token = authHeader.split(' ')[1];
  const decodedUser = verifyTokenValidity(token);

  if (!decodedUser) {
    return res.status(401).json({ error: 'Unauthorized: Invalid or expired token. Please login again.' });
  }

  // Check if user is a team member
  if (decodedUser.role !== 'team_member') {
    return res.status(403).json({ error: 'Forbidden: Access denied. Team member role required.' });
  }

  req.user = decodedUser;
  next();
};

// ✅ Role-based authorization middleware
export const authorizeRoles = (...allowedRoles) => {
  return (req, res, next) => {
    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ error: 'Forbidden: Access denied' });
    }
    next();
  };
};

// ✅ Admin authorization middleware
export const authorizeAdmin = (req, res, next) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ error: 'Forbidden: Admin access required' });
  }
  next();
};
