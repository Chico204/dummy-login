const express = require('express');
const router = express.Router();
const { test, registerUser } = require('../controllers/authControllers');

// routes
router.get('/', test);
router.post('/register', registerUser);

module.exports = router;