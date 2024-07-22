const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

const { protect, restrictTo } = require('../middlewares/auth.middlware');

router.post('/register', userController.register);

router.post('/login', userController.login);

router.patch('/update/:userId', protect, userController.updateProfile);

module.exports = router;
