// Validation logic for author input
const validateAuthorInput = (req, res, next) => {
  // Check if username, password, and email are present in the request body
  if (!req.body.username || !req.body.password || !req.body.email) {
    // If any of the required fields are missing, send a 400 Bad Request response
    return res.status(400).json({ error: 'Missing required fields' });
  }
  // If all required fields are present, call the next middleware or route handler
  next();
};

module.exports = { validateAuthorInput };


  
  