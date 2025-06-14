const AppError = require('../utils/appError');

// Custom handler for Supabase-related errors
const handleSupabaseError = err => {
  // You can add more specific checks based on `err.code` or `err.message`
  const message = `Supabase error: ${err.message || 'Unexpected database issue'}`;
  return new AppError(message, 400);
};

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
    // Handle known Supabase errors
    if (err?.message?.includes('Supabase')) {
      error = handleSupabaseError(err);
    }

    sendErrorProd(error, res);
  }
};
