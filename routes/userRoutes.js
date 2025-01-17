const express = require('express');
const { registerUser, loginUser, uploadAssignment, getAdmins } = require('../controllers/userController');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/upload', uploadAssignment);
router.get('/admins', getAdmins);

module.exports = router;
