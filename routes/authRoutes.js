// routes/authRoutes.js

const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { validateAuthorInput } = require('../middleware/authMiddleware');

router.post('/login', authController.login);
router.post('/register', validateAuthorInput, authController.register); // Applying validation middleware

module.exports = router;
