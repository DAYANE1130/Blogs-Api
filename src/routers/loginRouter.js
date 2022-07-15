const { Router } = require('express');
const loginController = require('../controller/loginController');
const validateEmailPassword = require('../middleware/ validateEmailPassword');

const router = Router();

// router.get('/', bookController.getAll);
// router.get('/:id', bookController.getById);
router.post('/', validateEmailPassword.validateEmail,
validateEmailPassword.validatePassword, loginController.create);

module.exports = router;