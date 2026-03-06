//
//  Instead of having to try-catch and res in each method
//  we simply have a handler.js file that handles these
//  things. For ease of use and for better overview!
//
//  - Guac 
//

// ______________________________________________________________
// TRY-CATCH AVOIDER | f = function

export const asyncHandler = (f) => (req, res, next) => {
  f(req, res, next).catch((err) => {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  });
};

// ______________________________________________________________
// VALIDATION

export const validateFields = (body, requiredFields) => {
  const missing = requiredFields.filter((field) => !body[field]);
  return missing;
};

// ______________________________________________________________
// SUCCESS

export const successResponse = (res, data, status = 200) => {
  res.status(status).json(data);
};

// ______________________________________________________________
// ERROR

export const errorResponse = (res, message, status = 500) => {
  res.status(status).json({ error: message });
};