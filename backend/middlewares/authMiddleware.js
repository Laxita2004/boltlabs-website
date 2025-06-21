import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;

// ✅ Function to verify token and return user payload
export const verifyTokenValidity = (token) => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // contains { member_id, role }
    next();
  } catch (err) {
    res.status(401).json({ error: 'Unauthorized: Invalid token' });
  }
};

// ✅ Middleware to authenticate user for protected routes
export const authenticateUser = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Unauthorized: No token provided' });
  }

  const token = authHeader.split(' ')[1];
  const decodedUser = verifyTokenValidity(token);

  if (!decodedUser) {
    return res.status(401).json({ error: 'Unauthorized: Invalid or expired token. Please login again.' });
  }

  req.user = decodedUser; // attach decoded user info to request
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

// 🔒 Authenticate team member specifically
export const authenticateTeamMember = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer '))
    return res.status(401).json({ error: 'Unauthorized: No token provided' });

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // Check if the user is a team member
    if (decoded.role !== 'member') {
      return res.status(403).json({ error: 'Forbidden: Access restricted to team members only' });
    }
    
    req.user = decoded; // contains { member_id, role }
    next();
  } catch (err) {
    res.status(401).json({ error: 'Unauthorized: Invalid token' });
  }
};
