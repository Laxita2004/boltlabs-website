const AppError = require('../utils/appError');

// Error response in development
const sendErrorDev = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack
  });
};

// Error response in production
const sendErrorProd = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message || 'Something went very wrong!'
  });
};

// Main error middleware
module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  // Clone error object (shallow)
  let error = { ...err };
  error.message = err.message;

  if (process.env.NODE_ENV === 'development') {
    sendErrorDev(err, res);
  } else {
    sendErrorProd(error, res);
  }
};
