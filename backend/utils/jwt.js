import jwt from 'jsonwebtoken';

export const generateToken = ({ id, role }) => {
  return jwt.sign({ [role + '_id']: id, role }, process.env.JWT_SECRET, {
    expiresIn: '7d'
  });
};
